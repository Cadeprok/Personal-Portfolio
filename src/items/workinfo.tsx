const WorkExperienceArray = [
    {
        'title': 'Software Engineer', 
        'company': 'Tech Solutions', 
        'duration': 'Jan 2020 - Present', 
        'bulletpoints':[
            'Developed and maintained web applications using React and Node.js.',
            'Collaborated with cross-functional teams to define, design, and ship new features.',
            'Optimized application performance and scalability through code reviews and refactoring.'
        ],
        'img': "../img/LinkedIN.jpg",
    },
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