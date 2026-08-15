/** Single source of truth for the page's sections — used by the desktop nav,
 *  the mobile tab bar, and the active-section observer. */
export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
