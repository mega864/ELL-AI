export interface Founder {
  id: string;
  name: string;
  role: string;
  focusArea: string;
  bio: string;
  linkedInUrl: string | null;
  status?: string;
  initials: string;
}

export const FOUNDERS_DATA: Founder[] = [
  {
    id: "kathiravan",
    name: "Kathiravan Rajendran",
    role: "Co-Founder",
    focusArea: "Systems Architecture & Engineering",
    bio: "Focused on complex physical architectures, validation methodologies and embedded engineering frameworks.",
    linkedInUrl: "https://www.linkedin.com/in/kathiravan-rajendran/",
    initials: "KR",
  },
  {
    id: "govindaraj",
    name: "Govindaraj Shankar",
    role: "Co-Founder",
    focusArea: "AI & Product Engineering",
    bio: "Driving AI-assisted validation workflows, system intelligence and software-to-hardware interfaces.",
    linkedInUrl: "https://www.linkedin.com/in/govindaraj-sankar/",
    initials: "GS",
  },
  {
    id: "meganathan",
    name: "Meganathan R.",
    role: "Co-Founder",
    focusArea: "Validation Systems & Automation",
    bio: "Pioneering intelligent validation workflows, automated test pipelines and physical sensor evaluation.",
    linkedInUrl: "https://www.linkedin.com/in/meganathan-r-1b3854279/",
    initials: "MR",
  },
  {
    id: "arjun",
    name: "Arjun",
    role: "Co-Founder",
    focusArea: "Systems Engineering & Research",
    bio: "Specializing in operational boundaries, simulation methodologies and physical systems testing.",
    linkedInUrl: null, // Pending profile update
    status: "Profile Link Pending",
    initials: "AR",
  },
];
