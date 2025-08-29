const ProjectInfoArray = [
    {
      title: "FindAPet",
      description:
        "A responsive pet adoption app focused on user experience. Designed for performance, ease of use, and future backend integrations.",
      img: "./img/WorkImgs/FindAPet_Web.png", // Replace with real image if available
      link: "#", // Replace with actual link when available
      techStack:
        "React.js, Next.js, Tailwind CSS, TypeScript, HTML, CSS, SQL, MySQL Server, Python, AWS S3 Buckets",
    },
    {
      title: "MSU Computing Club Website",
      description:
        "Created a dynamic multi-page website to showcase club info, meeting times, and board member profiles.",
      img: "./img/WorkImgs/CC_Club_Web.png", // Replace if you have a better image
      link: "https://msucomputerclub.netlify.app/",
      techStack: "HTML5, CSS, JavaScript, Bootstrap, jQuery",
    },
    {
      title: "Coders Den",
      description:
        "Built a full-stack e-commerce site for coding courses with professor profiles and secure, encrypted user authentication.",
      img: "./img/WorkImgs/Coders_Den_Web.png", // Replace if you have a better image
      link: "https://github.com/Cadeprok/Coders-Den",
      techStack: "HTML5, CSS, JavaScript, Flask",
    },
  ];
  
  

type ProjectInfoType = {
    title: string;
    description: string;
    img: string;
    link: string;
    techStack:string;
}

export { ProjectInfoArray };
export type { ProjectInfoType };