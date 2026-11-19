export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Platform", href: "#platform", description: "Interactive validation workspace demonstration" },
  { label: "How It Works", href: "#how-it-works", description: "10-step requirement-to-evidence workflow" },
  { label: "Boundaries", href: "#boundaries", description: "Boundary exploration & limits intelligence" },
  { label: "Technology", href: "#technology", description: "Four-layer engineering architecture" },
  { label: "Industries", href: "#industries", description: "Automotive, Robotics, Aerospace & more" },
  { label: "About Us", href: "#about", description: "Meet the founding team" },
];
