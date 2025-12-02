// data/projects.ts

export interface Project {
  id: string;
  title: string;
  company: string; // e.g., "RIGI" or "BMW"
  imageUrl: string;
  altText: string;
}

export const projectsData: Project[] = [
  {
    id: "p1",
    company: "Chron Solutions",
    title: "Building branded apps for creators.",
    // Replace with your actual image path, e.g., "/images/rigi-work.png"
    imageUrl: "/chron.png",
    altText: "Screenshots of the RIGI mobile and web application",
  },
  {
    id: "p2",
    company: "Faridas Makeup Studio",
    title: "Luxury vehicle companion app experience.",
    // Replace with your actual image path, e.g., "/images/bmw-work.png"
    imageUrl: "/faridas.png",
    altText: "Screenshots of the BMW mobile application dark mode interface",
  },
    {
    id: "p3",
    company: "Texochat",
    title: "Building branded apps for creators.",
    // Replace with your actual image path, e.g., "/images/rigi-work.png"
    imageUrl: "/texochat.png",
    altText: "Screenshots of the RIGI mobile and web application",
  },
  {
    id: "p4",
    company: "Rivochem ",
    title: "Luxury vehicle companion app experience.",
    // Replace with your actual image path, e.g., "/images/bmw-work.png"
    imageUrl: "/rivochem.jpg",
    altText: "Screenshots of the BMW mobile application dark mode interface",
  },
  // Add more projects here...
];