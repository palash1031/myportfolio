import { useRef, useState } from 'react';

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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  // Keep the dots in step with a native scroll-snap swipe
  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.firstElementChild as HTMLElement | null;
    if (!card) return;

    const stride = card.offsetWidth + 16; // card + gap-4
    setActiveCard(Math.round(scroller.scrollLeft / stride));
  };

  const goToCard = (index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.firstElementChild as HTMLElement | null;
    if (!scroller || !card) return;

    scroller.scrollTo({ left: index * (card.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Section header */}
        <div className="mb-8 space-y-3 md:mb-16 md:space-y-4 md:text-right">
          <span className="glass-subtle inline-block rounded-full px-4 py-1.5 font-space text-xs uppercase tracking-widest text-accent">
            Cool Stuff
          </span>
          <h2 className="font-syne text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
            My <span className="fluid-text">Projects</span>
          </h2>
        </div>
      </div>

      {/* Mobile: swipeable deck. Full-bleed so cards bleed off both edges,
          which is what signals "there's more this way". */}
      <div className="md:hidden">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="glass relative flex w-[82vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] p-6"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-70`}
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="font-space text-xs text-accent">{project.category}</span>
                  <span className="font-syne text-3xl font-bold text-foreground/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-syne text-2xl font-bold leading-tight tracking-tight">
                  {project.title}
                </h3>

                <span className="mt-1.5 font-space text-xs text-muted-foreground">
                  {project.year}
                </span>

                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Cap the chips so every card keeps the same rhythm */}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="glass-subtle rounded-full px-2.5 py-1 font-space text-[11px] text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="glass-subtle rounded-full px-2.5 py-1 font-space text-[11px] text-muted-foreground">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToCard(index)}
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              aria-current={activeCard === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeCard === index
                  ? 'w-6 bg-gradient-to-r from-primary to-accent'
                  : 'w-1.5 bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: stacked panels */}
      <div className="container mx-auto hidden max-w-6xl space-y-6 px-6 md:block">
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
    </section>
  );
};

export default ProjectsSection;
