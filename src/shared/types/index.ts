// Shared types for the XY Coffee application

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'caliente' | 'frio' | 'especial';
  emoji: string;
  gradient: string;
}

export interface LocationInfo {
  address: string;
  hours: string;
  contact: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message?: string;
}

export interface NavLink {
  href: string;
  text: string;
  submenu?: NavLink[];
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface Stat {
  number: string;
  label: string;
}

export type MenuCategory = 'all' | 'caliente' | 'frio' | 'especial';
