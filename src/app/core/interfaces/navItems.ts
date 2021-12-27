export interface NavItem {
  title: string;
  route: string;
  icon?: string;
}

export type NavItems = NavItem[] | null;
