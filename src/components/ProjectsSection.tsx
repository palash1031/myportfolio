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
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 space-y-4 md:text-right">
          <span className="glass-subtle inline-block rounded-full px-4 py-1.5 font-space text-xs uppercase tracking-widest text-accent">
            Cool Stuff
          </span>
          <h2 className="font-syne text-4xl font-bold tracking-tight md:text-6xl">
            My <span className="fluid-text">Projects</span>
          </h2>
        </div>

        {/* Project panels */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="glass glass-hover group relative overflow-hidden rounded-[2rem] p-8 md:p-12"
            >
              {/* Hover tint */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />

              {/* Sheen sweep on hover */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-[shimmer_1.2s_ease-out] group-hover:opacity-100" />
              </div>

              <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                {/* Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-space text-sm text-muted-foreground">
                      {project.year}
                    </span>
                    <span className="h-px w-8 bg-border" />
                    <span className="font-space text-sm text-accent">{project.category}</span>
                  </div>

                  <h3 className="font-syne text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="max-w-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-subtle rounded-full px-3 py-1 font-space text-xs text-foreground/80 transition-colors duration-300 hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Index watermark */}
                <div className="flex items-center md:flex-col">
                  <span className="font-syne text-7xl font-bold text-foreground/[0.07] transition-colors duration-500 group-hover:text-primary/25 md:text-9xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
