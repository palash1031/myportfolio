import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'S&P 500 Inclusion/Exclusion Model',
    category: 'Finance/Quant Project',
    description: 'Developed a model to determine if a company is included or excluded in the S&P 500, using calculated and non-calculated inputs to identify underperformers.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning', 'Random Forest', 'Logistic Regression', 'Data Analysis', 'Data Visualization'],
    color: 'from-primary/20 to-accent/20',
    year: 'Sept 2024 - Dec 2024',
  },
  {
    id: 2,
    title: 'Growth Potential Model',
    category: 'Finance/Quant Project',
    description: 'Lead a team of software engineers and quant analysts to develop a model a company\'s potential to map their impact on its given sector based on a variety of factors. This model uses Python and a Gaussien Mixture Model to predict and map a companies impact and its growth.',
    tags: ['Finance', 'Python', 'Machine Learning', 'Data Analysis', 'Data Visualization', 'Quant', 'API', 'Gaussien Mixture Model'],
    color: 'from-primary/20 to-accent/20',
    year: 'Dec 2024 - May 2025',
  },
  {
    id: 3,
    title: 'Movies Store App',
    category: 'Web Dev Project',
    description: 'Trained and evaluated large-scale AI systems through structured experimentation and feedback integration, enabling faster iteration cycles and enhancing product performance for thousands of end-users.',
    tags: ['Web', 'HTML', 'CSS', 'Python', 'Django', 'Agile'],
    color: 'from-accent/20 to-fluid-peach/20',
    year: 'Jan 2025 - Feb 2025',
  },
  {
    id: 4,
    title: 'Text Emotion Detector',
    category: 'Natural Language Processing',
    description: 'Achieved 92%+ classification accuracy by building an emotion detection tool in Python using IBM Watson’s NLP API and Flask, improving real-time sentiment analysis for user-submitted text data. Developed a web-based emotion recognition app using Flask and IBM Watson NLP to classify user input into discrete emotions (e.g., joy, anger, sadness), integrating real-time feedback and dynamic UI rendering.',
    tags: ['Python', 'Flask', 'NLP', 'Text Classification', 'Sentiment Analysis', 'Machine Learning', 'IBM Watson NLP'],
    color: 'from-fluid-peach/20 to-primary/20',
    year: 'Jan 2025 - Feb 2025',
  },
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 space-y-4 text-end block">
          <span className="text-primary font-space text-sm tracking-widest uppercase">
            Cool Stuff
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight">
            My <span className="fluid-text">Projects</span>
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

export default ProjectsSection;
