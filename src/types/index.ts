export interface PublishedApp {
  id: string;
  name: string;
  tagline: string;
  category: 'Mobile' | 'Dev Tools' | 'Utility' | 'Audio';
  rating: number;
  reviewsCount: string;
  downloads: string;
  releaseYear: string;
  platforms: ('iOS' | 'Android' | 'Web' | 'Desktop')[];
  featured: boolean;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  features: string[];
  packageId: string;
  accentColor: string;
  badge: string;
  simulatedScreen: {
    heroMetric: string;
    heroLabel: string;
    subStats: { label: string; value: string }[];
    mockStatus: string;
    actionLabel: string;
  };
}

export interface MascotCard {
  id: string;
  title: string;
  caption: string;
  badge: string;
  image: string;
  alt: string;
  quote: string;
}

export interface PipelineStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
}
