const ProjectInfoArray = [
    {
        'titlke': 'Project One',
        'description': 'This is a description of Project One. It showcases the main features and functionalities of the project.',
        'img': '../img/project1.jpg',
        'link': '',
    },
];

type ProjectInfoType = {
    title: string;
    description: string;
    img: string;
    link: string;
}

export { ProjectInfoArray };
export type { ProjectInfoType };