export interface NavItem {
  title: string;
  route: string;
  icon?: string;
  tooltip?: string;
}

export type NavItems = NavItem[] | null;
