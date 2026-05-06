import { useRef, useEffect } from 'react';

export function AnimatedMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      // Clear with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 20, 0.8)');
      gradient.addColorStop(0.5, 'rgba(15, 10, 35, 0.6)');
      gradient.addColorStop(1, 'rgba(5, 5, 15, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated mesh points
      const points = 5;
      const pointSize = 150 + Math.sin(time * 0.001) * 50;

      for (let i = 0; i < points; i++) {
        for (let j = 0; j < points; j++) {
          const x = (canvas.width / (points - 1)) * i;
          const y = (canvas.height / (points - 1)) * j;

          // Perlin-like noise animation
          const offsetX = Math.sin(time * 0.0003 + i * 0.5) * 30;
          const offsetY = Math.cos(time * 0.0002 + j * 0.5) * 30;

          const finalX = x + offsetX;
          const finalY = y + offsetY;

          // Cyan/blue glow
          const hue = (time * 0.02 + i * 10 + j * 10) % 360;
          const alpha = 0.3 + Math.sin(time * 0.001 + i + j) * 0.2;

          ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(finalX, finalY, pointSize, 0, Math.PI * 2);
          ctx.fill();

          // Blur effect
          ctx.filter = 'blur(80px)';
        }
      }

      ctx.filter = 'none';

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < points; i++) {
        for (let j = 0; j < points - 1; j++) {
          ctx.beginPath();
          ctx.moveTo((canvas.width / (points - 1)) * i, (canvas.height / (points - 1)) * j);
          ctx.lineTo((canvas.width / (points - 1)) * i, (canvas.height / (points - 1)) * (j + 1));
          ctx.stroke();
        }
      }

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
