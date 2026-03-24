import { useRef, useEffect } from 'react';

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;
  
  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    // Fix aspect ratio
    st.x *= u_resolution.x / u_resolution.y;
    
    vec3 color = vec3(0.0);
    
    // Normalize coordinates from -1 to 1
    st = st * 2.0 - 1.0;
    
    float t = u_time * 0.4;
    
    // Generate organic waves
    float v1 = sin(st.x * 2.0 + t);
    float v2 = sin(st.y * 2.5 + t * 1.2);
    float v3 = sin((st.x + st.y) * 2.0 - t * 0.8);
    float v4 = sin(sqrt(st.x * st.x + st.y * st.y) * 3.0 - t);
    float v = (v1 + v2 + v3 + v4) * 0.5;
    
    // Requested Colors
    vec3 bgColor1 = vec3(0.05, 0.05, 0.2); // vec4(0.05, 0.05, 0.2, 1.0)
    vec3 bgColor2 = vec3(0.2, 0.05, 0.35); // vec4(0.2, 0.05, 0.35, 1.0)
    vec3 lineColor = vec3(0.4, 0.2, 0.8);  // vec4(0.4, 0.2, 0.8, 1.0)
    
    // Mix background colors mapped to space and wave motion
    color = mix(bgColor1, bgColor2, smoothstep(-1.0, 1.0, st.y + v * 0.3));
    
    // Add plasma glowing lines based on the wave function
    float lineIntensity = 1.0 - smoothstep(0.0, 0.15, abs(v));
    color = mix(color, lineColor, lineIntensity * 0.6);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader Compile Error: " + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program Link Error: " + gl.getProgramInfoLog(program));
      return;
    }

    const positionAttributeLocation = gl.getAttribLocation(program, "position");
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    const timeUniformLocation = gl.getUniformLocation(program, "u_time");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    let animationFrameId: number;
    let startTime = Date.now();
    let isVisible = true;

    const handleScroll = () => {
      // Pause animation if scrolled more than a viewport height down
      isVisible = window.scrollY < window.innerHeight;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const render = () => {
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
      
      // Skip heavy WebGL draw calls if not visible
      if (!isVisible) return;
      
      const currentTime = Date.now();
      const uTime = (currentTime - startTime) * 0.001;
      
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform1f(timeUniformLocation, prefersReducedMotion ? 0.5 : uTime); // static frame if reduced motion

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    render();

    return () => {
      if (!prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
