import { useState } from "react";
import { profile } from "../data/profile";
import { Button } from "../components/ui/Button";
import { Magnetic } from "../components/ui/Magnetic";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-[480px] mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl font-serif text-espresso mb-4">Let's collaborate</h2>
        
        <p className="text-base text-coffee mb-8 leading-relaxed">
          I'm open to research discussions, collaboration inquiries, and PhD supervision conversations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Magnetic>
            <Button asChild size="sm" className="w-full sm:w-auto">
              <a href={`mailto:${profile.email}`}>
                Open Mail App &rarr;
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCopy}
              className="w-full sm:w-auto min-w-[140px]"
            >
              {copied ? "Copied! ✓" : "Copy Email"}
            </Button>
          </Magnetic>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/50 shadow-ambient text-left">
          <h3 className="text-lg font-semibold text-espresso mb-6">Send a message</h3>
          <form 
            action={`mailto:${profile.email}`} 
            method="GET" 
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-coffee-light mb-1.5 uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-3 py-2 text-sm rounded-lg border border-cream-300 bg-cream-50 text-coffee focus:outline-none focus:ring-2 focus:ring-caramel focus:border-transparent transition-shadow"
                placeholder="Research Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="body" className="block text-xs font-medium text-coffee-light mb-1.5 uppercase tracking-wider">Message</label>
              <textarea 
                id="body" 
                name="body" 
                rows={3}
                className="w-full px-3 py-2 text-sm rounded-lg border border-cream-300 bg-cream-50 text-coffee focus:outline-none focus:ring-2 focus:ring-caramel focus:border-transparent transition-shadow resize-none"
                placeholder="Hello Biswajyoti..."
              />
            </div>
            
            <div className="pt-2">
              <Button type="submit" size="sm" className="w-full">
                Prepare Email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
