export type Project = {
  slug: string;
  title: string;
  year: number;
  roles: string[];
  logline: string;
  videoUrl?: string;
  stills: string[];
};

export const projects: Project[] = [
  {
    slug: "monday-morning-coffee-blues",
    title: "Monday Morning Coffee Blues",
    year: 2024,
    roles: ["Director","Editor","Sound"],
    logline: "Satirisk kontorfilm med VO og surrealistiske drypp.",
    videoUrl: "https://www.youtube.com/embed/XXXXXXXX",
    stills: ["/stills/mmcb-1.jpg","/stills/mmcb-2.jpg"]
  }
];
