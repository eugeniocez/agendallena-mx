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
}
