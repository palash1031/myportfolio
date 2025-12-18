import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-space text-sm tracking-widest uppercase">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight">
                Let's Create <span className="fluid-text">Together</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              bring your ideas to life with fluid, engaging design.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <a
                href="mailto:hello@johndoe.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-space">hello@johndoe.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-full bg-secondary/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-space">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-4 rounded-full bg-card border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-space text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-space"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-space text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-space"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-space text-foreground/80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-space"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-space text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-space resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full py-4 px-8 bg-primary text-primary-foreground font-syne font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] relative group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
