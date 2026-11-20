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
    id: "mallikarjunan",
    name: "Mallikarjunan Pechimuthu",
    role: "Co-Founder",
    focusArea: "Validation & Systems Engineering",
    bio: "Senior engineer in ECU system engineering and validation for vehicle electronic architectures across HIL setups, vehicle networks, and field issue resolution.",
    linkedInUrl: "https://in.linkedin.com/in/mallikarjunan-pechimuthu-29b62a1a3",
    initials: "MP",
  },
  {
    id: "govindaraj",
    name: "Govindaraj Shankar",
    role: "Co-Founder",
    focusArea: "Automotive Engineering",
    bio: "Automotive OEM engineering background, bringing product development discipline and deep insight into how automotive teams evaluate and adopt validation tools.",
    linkedInUrl: "https://www.linkedin.com/in/govindaraj-sankar/",
    initials: "GS",
  },
  {
    id: "meganathan",
    name: "Meganathan",
    role: "Co-Founder",
    focusArea: "AI Engineering",
    bio: "Specializes in building AI systems in fast-paced software environments, managing data pipelines, model serving, and reliable production deployment.",
    linkedInUrl: "https://www.linkedin.com/in/meganathan-r-1b3854279/",
    initials: "M",
  },
  {
    id: "kathiravan",
    name: "Kathiravan",
    role: "Co-Founder",
    focusArea: "Founder & Product",
    bio: "Hands-on experience taking an AI product from early concept to active users, leading technical product direction and operational execution.",
    linkedInUrl: "https://www.linkedin.com/in/kathiravan-rajendran/",
    initials: "K",
  },
];
