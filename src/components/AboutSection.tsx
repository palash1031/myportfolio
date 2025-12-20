import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Development', description: 'Full Stack Development!'},
  { icon: Palette, label: 'Design', description: 'UI/UX, Figma, Canva, Graphic Design' },
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
                I like developing <span className="fluid-text">Cool</span> Stuff
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Software Engineer with experience specializing in both front and back-end development! I'm interested in the intersection of finance and technology, hoping to end up at some sort of trading or quant adjacent role.
              </p>
              <p>
              When I'm not coding, you can find me studying, playing video games, taking photos, or cooking. I'm constantly learning and evolving my skills to stay at the forefront of industry trends and technological advancements.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="text-4xl font-syne font-bold fluid-text">5+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl font-syne font-bold fluid-text">AWS</span>
                <p className="text-sm text-muted-foreground mt-1">Certified</p>
              </div>
              <div>
                <span className="text-4xl font-syne font-bold fluid-text">IBM</span>
                <p className="text-sm text-muted-foreground mt-1">Certified</p>
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
                {['Java', 'JavaScript', 'HTML', 'CSS', 'React', 'React Native', 'Next.js', 'Node.js', 'SQL', 'AWS', 'Agile', 'Git', 'GitHub', 'Figma', 'Flask', 'Django', 'Python', 'C', 'C++', ].map(
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
