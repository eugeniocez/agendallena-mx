export interface ProblemCard {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarStyle?: 'green' | 'dark' | '';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type CompetitorCell = 'check' | 'x' | 'dash';

export interface VerticalCompetitor {
  name: string;
  rows: [CompetitorCell, CompetitorCell, CompetitorCell, CompetitorCell, CompetitorCell, CompetitorCell, CompetitorCell];
}

export interface VerticalContent {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
  };
  problema: {
    cards: [ProblemCard, ProblemCard, ProblemCard];
  };
  testimonials: {
    heading: string;
    items: [Testimonial, Testimonial, Testimonial];
  };
  serviceSchema: {
    audience: string;
    serviceType: string;
  };
  smsContext?: string;
  statementStrip?: {
    title?: string;
  };
  faq?: {
    extraItems: FaqItem[];
  };
  finalCta?: {
    heading: string;
    body: string;
  };
  comparison?: {
    competitor: VerticalCompetitor;
  };
}
