const WorkExperienceArray = [
    {
      title: "Information Technology Intern",
      company: "J. Fletcher Creamer & Son, Inc.",
      duration: "May 2025 - Present",
      bulletpoints: [
        "Managed and troubleshooted Windows and Android devices using ADManager, Intune, and ServiceNow.",
        "Automated Mitel phone data tasks with Python, reducing manual effort.",
        "Improved IT inventory and asset tracking for better efficiency."
      ],
      img: "./img/WorkImgs/JFCSON_LOGO.png"
    },
    {
      title: "Undergraduate Researcher",
      company: "Montclair State University",
      duration: "Aug 2025 - Present",
      bulletpoints: [
        "Researching AI and space science for planet discovery."
      ],
      img: "./img/WorkImgs/MSU_Img.png"
    },
    {
      title: "Software Engineer Intern",
      company: "NextFoundArtist",
      duration: "Jan 2025 - May 2025",
      bulletpoints: [
        "Built backend CRUD features using Python, FastAPI, and SQL.",
        "Developed frontend with React, Next.js, and TypeScript.",
        "Designed responsive UI with Tailwind CSS."
      ],
      img: "./img/WorkImgs/NFA_Image.jpg"
    },
    {
      title: "Information Technology Intern",
      company: "FRANKLIN LAKES PUBLIC SCHOOLS",
      duration: "Jun 2022 - Aug 2024",
      bulletpoints: [
        "Created a Python script for automatic time syncing on startup.",
        "Automated secure Wi-Fi connections using Python.",
        "Optimized classroom tech setups and resolved computer issues."
      ],
      img: "./img/WorkImgs/FLPS_Img.png"
    },
    {
      title: "Undergraduate Researcher",
      company: "Montclair State University",
      duration: "Sep 2023 - May 2024",
      bulletpoints: [
        "Collected MR sensor data using Python.",
        "Troubleshot systems, networks, and MR hardware."
      ],
      img: "./img/WorkImgs/MSU_Img.png"
    }
  ];
  
  

type workExperienceType = {
    title: string;
    company: string;
    duration: string;
    bulletpoints: string[];
    img: string;
}

export { WorkExperienceArray };
export type { workExperienceType };