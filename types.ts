export interface RepositoryItem {
  id: string;
  name: string;
  category?: string;
  code: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}
