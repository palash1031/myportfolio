import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const WEB3FORMS_ACCESS_KEY = 'f6c50f9a-a783-4b07-9e36-d2c7ea920b9c';

  const socialLinks = [
    { icon: Github, href: 'https://github.com/palash1031', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/palash-patel-1b001a210/', label: 'LinkedIn' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formData.subject,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                href="mailto:palash1031@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-space">palash1031@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-full bg-secondary/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-space">Atlanta, GA</span>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-space text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
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
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-space resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-space">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-space">
                  ✗ Failed to send message. Please try again or email me directly at palash1031@gmail.com
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full py-4 px-8 bg-primary text-primary-foreground font-syne font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] relative group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className={`w-4 h-4 transition-transform duration-300 ${isHovered && !isSubmitting ? 'translate-x-1 -translate-y-1' : ''}`} />
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
