import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { SiChase } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";

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
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  return (
    <section id="work" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <span className="text-primary font-space text-sm tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight">
            Work <span className="fluid-text">Experience</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredExperience(experience.id)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 border-4 border-background z-10 transition-transform duration-300 hover:scale-150" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div
                    className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer border border-border/50 ${
                      hoveredExperience === experience.id ? 'bg-card scale-[1.02]' : 'bg-card/50'
                    }`}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 space-y-4">
                      {/* Company & Role */}
                      <div>
                        <div className="flex items-center gap-2 text-primary mb-1">
                          {experience.logo ? (
                            <experience.logo className="w-5 h-5" />
                          ) : (
                            <Building2 className="w-4 h-4" />
                          )}
                          <span className="font-space text-sm font-medium">{experience.company}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-syne font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {experience.role}
                        </h3>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-space">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-space bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
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
