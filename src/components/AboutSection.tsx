import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Development', description: 'React, TypeScript, Node.js' },
  { icon: Palette, label: 'Design', description: 'UI/UX, Figma, Prototyping' },
  { icon: Sparkles, label: 'Animation', description: 'Framer Motion, GSAP, CSS' },
  { icon: Zap, label: 'Performance', description: 'Optimization & Accessibility' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-space text-sm tracking-widest uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-syne font-bold tracking-tight">
                Crafting Digital <span className="fluid-text">Experiences</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a creative developer with a passion for building fluid, engaging web experiences. 
                With over 5 years of experience, I specialize in creating interfaces that feel intuitive 
                and delightful to use.
              </p>
              <p>
                My approach combines technical expertise with design thinking—I believe the best 
                digital products are those where form and function work in perfect harmony. Every 
                animation, every interaction, every pixel serves a purpose.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, experimenting with 
                creative coding, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="text-4xl font-syne font-bold fluid-text">5+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl font-syne font-bold fluid-text">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <span className="text-4xl font-syne font-bold fluid-text">30+</span>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-syne font-semibold text-foreground/80">
              What I Do
            </h3>

            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-syne font-semibold text-lg mb-1">{skill.label}</h4>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="pt-8">
              <h3 className="text-xl font-syne font-semibold text-foreground/80 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Figma'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-space bg-secondary/50 text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
