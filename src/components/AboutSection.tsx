import { Code2, Palette, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Development', description: 'Full Stack Development!' },
  { icon: Palette, label: 'Design', description: 'UI/UX, Figma, Canva, Graphic Design' },
  { icon: Zap, label: 'Performance', description: 'Optimization & Accessibility' },
];

const stats = [
  { id: 'experience', value: '5+', label: 'Years Experience' },
  { id: 'aws', value: 'AWS', label: 'Certified' },
  { id: 'ibm', value: 'IBM', label: 'Certified' },
];

const techStack = [
  'Java', 'JavaScript', 'HTML', 'CSS', 'React', 'React Native', 'Next.js', 'Node.js',
  'SQL', 'AWS', 'Agile', 'Git', 'GitHub', 'Figma', 'Flask', 'Django', 'Python', 'C', 'C++',
];

const AboutSection = () => {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left — story */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="glass-subtle inline-block rounded-full px-4 py-1.5 font-space text-xs uppercase tracking-widest text-primary">
                About Me
              </span>
              <h2 className="font-syne text-4xl font-bold tracking-tight md:text-5xl">
                I like developing <span className="fluid-text">Cool</span> Stuff
              </h2>
            </div>

            <div className="glass space-y-5 rounded-3xl p-6 leading-relaxed text-muted-foreground md:p-8">
              <p>
                I&apos;m a passionate Software Engineer with experience specializing in both front
                and back-end development! I&apos;m interested in the intersection of finance and
                technology, hoping to end up at some sort of trading or quant adjacent role.
              </p>
              <p>
                When I&apos;m not coding, you can find me studying, playing video games, taking
                photos, or cooking. I&apos;m constantly learning and evolving my skills to stay at
                the forefront of industry trends and technological advancements.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="glass glass-hover rounded-2xl p-4 text-center sm:p-5"
                >
                  <span className="fluid-text font-syne text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills & stack */}
          <div className="space-y-6">
            <h3 className="font-syne text-xl font-semibold text-foreground/80">What I Do</h3>

            <div className="grid gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="glass glass-hover group cursor-default rounded-3xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="glass-subtle flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <skill.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="mb-1 font-syne text-lg font-semibold">{skill.label}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="mb-4 font-syne text-xl font-semibold text-foreground/80">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="glass-subtle rounded-full px-3.5 py-1.5 font-space text-sm text-foreground/80 transition-colors duration-300 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
