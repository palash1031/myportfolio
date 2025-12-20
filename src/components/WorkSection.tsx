import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'J.P. Morgan',
    category: 'Software Engineer Intern',
    description: 'I have accepted an offer to work as a Software Engineer Intern at J.P. Morgan for the summer of 2026 in Tampa Florida, stay tuned to see what I accomplish!',
    tags: ['N/A'],
    color: 'from-primary/20 to-accent/20',
    year: 'June 2026 - August 2026',
  },
  {
    id: 2,
    title: 'Amazon',
    category: 'Software Developer Engineer Intern',
    description: 'I have accepted an offer to work as a Software Developer Engineer Intern at Amazon in Seattle Washington, stay tuned to see what I accomplish!',
    tags: ['N/A'],
    color: 'from-primary/20 to-accent/20',
    year: 'Jan 2026 - Present',
  },
  {
    id: 3,
    title: 'Handshake AI',
    category: 'AI Engineer',
    description: 'Trained and evaluated large-scale AI systems through structured experimentation and feedback integration, enabling faster iteration cycles and enhancing product performance for thousands of end-users.',
    tags: ['AI', 'Machine Learning', 'Testing'],
    color: 'from-accent/20 to-fluid-peach/20',
    year: 'Aug 2025 - Present',
  },
  {
    id: 4,
    title: 'PeerPop',
    category: 'Software Engineer',
    description: 'Full-stack software engineer at PeerPop using React and JavaScript to address and resolve work tickets ranging from basic to intermediate complexity using an Agile engineering methodology. \n Developed features and bug fixes in a production React app for the platform. Improved component modularity, state handling, and responsiveness. Wrote unit tests and contributed to long-term codebase maintainability',
    tags: ['React', 'React Native', 'Node.js', 'Google Firebase' ,'Agile'],
    color: 'from-fluid-peach/20 to-primary/20',
    year: 'December 2024 – August 2025',
  },
  {
    id: 5,
    title: 'Tech Vision',
    category: 'Software Developer Intern',
    description: 'Worked as a UI/UX engineer for Prachi Enterprises, developing a mobile app dashboard for inventory management using HTML, CSS, JavaScript, React, and the UnleashPOS framework. Integrated backend logic in Java with SQL-based queries to track and link customer purchase behavior to inventory and POS systems, enabling real-time data synchronization and transaction logging.',
    tags: ['UI/UX', 'HTML', 'CSS', 'JavaScript', 'React', 'Java', 'SQL', 'Querying'],
    color: 'from-fluid-peach/20 to-primary/20',
    year: 'June 2024 - August 2024',
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
            My J*bs
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight">
            Work <span className="fluid-text">Experience</span>
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
                  {/* Work Info */}
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
                          className="px-3 py-1 text-xs font-space bg-secondary/50 text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
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

                    
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkSection;
