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

  const fieldClass =
    'glass-input w-full rounded-2xl px-4 py-3 font-space text-foreground';

  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-16 md:px-6 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <span className="glass-subtle inline-block rounded-full px-4 py-1.5 font-space text-xs uppercase tracking-widest text-accent">
                Get in Touch
              </span>
              <h2 className="font-syne text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                Let&apos;s Create <span className="fluid-text">Together</span>
              </h2>
            </div>

            <p className="max-w-md leading-relaxed text-muted-foreground md:text-lg">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can
              bring your ideas to life with fluid, engaging design.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <a
                href="mailto:palash1031@gmail.com"
                className="glass glass-hover group flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="glass-subtle flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-space text-foreground transition-colors duration-300 group-hover:text-primary">
                  palash1031@gmail.com
                </span>
              </a>

              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="glass-subtle flex h-11 w-11 items-center justify-center rounded-xl text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-space text-muted-foreground">Atlanta, GA</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="glass glass-hover group flex h-14 w-14 items-center justify-center rounded-2xl"
                >
                  <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="glass-strong rounded-[2rem] p-5 md:p-10">
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-space text-sm text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-space text-sm text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-space text-sm text-foreground/80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-space text-sm text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="glass-subtle rounded-2xl border-emerald-500/30 p-4 font-space text-sm text-emerald-500">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="glass-subtle rounded-2xl border-red-500/30 p-4 font-space text-sm text-red-500">
                  ✗ Failed to send message. Please try again or email me directly at
                  palash1031@gmail.com
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="glass-button w-full rounded-2xl px-8 py-4 font-syne font-semibold disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isHovered && !isSubmitting ? '-translate-y-1 translate-x-1' : ''
                    }`}
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
