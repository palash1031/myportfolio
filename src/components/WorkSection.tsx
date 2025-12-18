import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Lumina',
    category: 'Web Application',
    description: 'A creative dashboard for managing digital assets with real-time collaboration features.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    color: 'from-primary/20 to-accent/20',
    year: '2024',
  },
  {
    id: 2,
    title: 'Nebula',
    category: 'E-Commerce',
    description: 'Modern e-commerce platform with immersive product experiences and seamless checkout.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    color: 'from-accent/20 to-fluid-peach/20',
    year: '2024',
  },
  {
    id: 3,
    title: 'Horizon',
    category: 'Mobile App',
    description: 'Fitness tracking app with fluid animations and personalized workout recommendations.',
    tags: ['React Native', 'Node.js', 'AI'],
    color: 'from-fluid-peach/20 to-primary/20',
    year: '2023',
  },
];

const WorkSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <span className="text-primary font-space text-sm tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight">
            Featured <span className="fluid-text">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative overflow-hidden rounded-3xl p-8 md:p-12 transition-all duration-700 cursor-pointer border border-border/50 ${
                  hoveredProject === project.id ? 'bg-card' : 'bg-card/50'
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  {/* Project Info */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground font-space text-sm">
                        {project.year}
                      </span>
                      <span className="w-12 h-px bg-border" />
                      <span className="text-muted-foreground font-space text-sm">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-syne font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground max-w-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-space bg-secondary/50 text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Number & Actions */}
                  <div className="flex md:flex-col items-center gap-6">
                    <span className="text-7xl md:text-9xl font-syne font-bold text-border/50 group-hover:text-primary/20 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-syne font-semibold text-lg fluid-link"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
