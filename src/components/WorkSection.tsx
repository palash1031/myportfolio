import { Building2, Calendar, MapPin } from 'lucide-react';
import { SiChase } from 'react-icons/si';
import { FaAmazon } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    title: 'J.P. Morgan',
    role: 'Software Engineer Intern',
    description: 'I have accepted an offer to work as a Software Engineer Intern at J.P. Morgan for the summer of 2026 in Tampa Florida, stay tuned to see what I accomplish!',
    technologies: ['N/A'],
    color: 'from-primary/20 to-accent/20',
    year: 'June 2026 - August 2026',
    location: 'Tampa, Florida',
    period: 'June 2026 - August 2026',
    company: 'J.P. Morgan',
    logo: SiChase,
  },
  {
    id: 2,
    title: 'Amazon',
    category: 'Software Developer Engineer Intern',
    role: 'Software Developer Engineer Intern',
    description: 'I have accepted an offer to work as a Software Developer Engineer Intern at Amazon in Seattle Washington, stay tuned to see what I accomplish!',
    technologies: ['N/A'],
    color: 'from-primary/20 to-accent/20',
    year: 'Jan 2026 - Present',
    location: 'Seattle, Washington',
    period: 'Jan 2026 - Present',
    company: 'Amazon',
    logo: FaAmazon,
  },
  {
    id: 3,
    title: 'Handshake AI',
    category: 'AI Engineer',
    role: 'AI Engineer',
    description: 'Trained and evaluated large-scale AI systems through structured experimentation and feedback integration, enabling faster iteration cycles and enhancing product performance for thousands of end-users.',
    technologies: ['AI', 'Machine Learning', 'Testing'],
    color: 'from-accent/20 to-fluid-peach/20',
    year: 'Aug 2025 - Present',
    location: 'Remote',
    period: 'Aug 2025 - Present',
    company: 'Handshake AI',
    logo: SiHandshake,
  },
  {
    id: 4,
    title: 'PeerPop',
    category: 'Software Engineer',
    role: 'Software Engineer',
    description: 'Full-stack software engineer at PeerPop using React and JavaScript to address and resolve work tickets ranging from basic to intermediate complexity using an Agile engineering methodology. \n Developed features and bug fixes in a production React app for the platform. Improved component modularity, state handling, and responsiveness. Wrote unit tests and contributed to long-term codebase maintainability',
    technologies: ['React', 'React Native', 'Node.js', 'Google Firebase' ,'Agile'],
    color: 'from-fluid-peach/20 to-primary/20',
    year: 'December 2024 – August 2025',
    location: 'Atlanta, Georgia',
    period: 'December 2024 – August 2025',
    company: 'PeerPop',
    //logo: SiChase,
  },
  {
    id: 5,
    title: 'Tech Vision',
    category: 'Software Developer Intern',
    role: 'Software Developer Intern',
    description: 'Worked as a UI/UX engineer for Prachi Enterprises, developing a mobile app dashboard for inventory management using HTML, CSS, JavaScript, React, and the UnleashPOS framework. Integrated backend logic in Java with SQL-based queries to track and link customer purchase behavior to inventory and POS systems, enabling real-time data synchronization and transaction logging.',
    technologies: ['UI/UX', 'HTML', 'CSS', 'JavaScript', 'React', 'Java', 'SQL', 'Querying'],
    color: 'from-fluid-peach/20 to-primary/20',
    year: 'June 2024 - August 2024',
    location: 'Griffin, Georgia',
    period: 'June 2024 - August 2024',
    company: 'Tech Vision',
    //logo: SiChase,
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="work" className="relative px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <span className="glass-subtle inline-block rounded-full px-4 py-1.5 font-space text-xs uppercase tracking-widest text-primary">
            Career Journey
          </span>
          <h2 className="font-syne text-4xl font-bold tracking-tight md:text-6xl">
            Work <span className="fluid-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`group relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-8 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="glass flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-125">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent" />
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                >
                  <article className="glass glass-hover relative cursor-default overflow-hidden rounded-3xl p-6 md:p-8">
                    {/* Tint that warms up on hover */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative z-10 space-y-4">
                      {/* Company */}
                      <div>
                        <div className="mb-2 flex items-center gap-2.5">
                          <span className="glass-subtle flex h-9 w-9 items-center justify-center rounded-xl text-primary">
                            {experience.logo ? (
                              <experience.logo className="h-4 w-4" />
                            ) : (
                              <Building2 className="h-4 w-4" />
                            )}
                          </span>
                          <span className="font-space text-sm font-medium text-primary">
                            {experience.company}
                          </span>
                        </div>
                        <h3 className="font-syne text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary md:text-3xl">
                          {experience.role}
                        </h3>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-x-4 gap-y-2 font-space text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {experience.location}
                        </span>
                      </div>

                      <p className="leading-relaxed text-muted-foreground">
                        {experience.description}
                      </p>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="glass-subtle rounded-full px-3 py-1 font-space text-xs text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>

                {/* Spacer for the alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
