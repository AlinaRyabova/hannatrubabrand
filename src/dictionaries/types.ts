export const LOCALES = ["uk", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uk";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export interface NavSection {
  about: string;
  expertise: string;
  services: string;
  experience: string;
  contact: string;
  cta: string;
}

export interface HeroDisciplines {
  first: string;
  second: string;
  third: string;
  tagline: string;
}

export interface HeroSection {
  badge: string;
  name: string;
  role: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  disciplines: HeroDisciplines;
}

export interface PillarItem {
  role: string;
  title: string;
  description: string;
}

export interface AboutSection {
  tag: string;
  title: string;
  lead: string;
  pillars: {
    academic: PillarItem;
    english: PillarItem;
    brand: PillarItem;
  };
}

export interface ExpertiseCategory {
  title: string;
  skills: string[];
}

export interface ExpertiseSection {
  tag: string;
  title: string;
  categories: {
    philology: ExpertiseCategory;
    english: ExpertiseCategory;
    brand: ExpertiseCategory;
    professional: ExpertiseCategory;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ServicesSection {
  tag: string;
  title: string;
  cta: string;
  items: ServiceItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export interface ExperienceSection {
  tag: string;
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface ContactSection {
  tag: string;
  title: string;
  subtitle: string;
  directContactLabel: string;
  formTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton: string;
  successMessage: string;
  errorMessage: string;
}

export interface FooterSection {
  rights: string;
  brandTagline: string;
  backToTop: string;
}

export interface Dictionary {
  nav: NavSection;
  hero: HeroSection;
  about: AboutSection;
  expertise: ExpertiseSection;
  services: ServicesSection;
  experience: ExperienceSection;
  contact: ContactSection;
  footer: FooterSection;
}