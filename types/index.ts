// Types for the Horizon Line website

export type SetupType = {
  id: string;
  title: string;
  description: string;
  href: string;
  features: string[];
  icon: string;
};

export type Emirate = {
  id: string;
  name: string;
  title: string;
  description: string;
  href: string;
  keyword: string;
  highlight: string;
};

export type OtherService = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export type ComparisonRow = {
  feature: string;
  mainland: string;
  freeZone: string;
  offshore: string;
};
