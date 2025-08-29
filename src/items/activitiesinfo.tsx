const ActivityInfoArray = [
    {
        name:'Computing Club',
        title:'Treasurer',
        dates:'2022 - 2025',
        description:'Developed an automated spreadsheet with user-input functionality, led oversign of SGA budget requests and proposals, and collaborate with other eboard members to plan various events.',
        img:'./img/WorkImgs/CC_Club.jpg'
    },
    {
        name:'HawkHack',
        title:'Financial Director',
        dates:'2022 - 2023',
        description:'Led financial coordination for HawkHack 2023, ensuring the events success within budget constraints by managing budgets for food, prizes, logistics, and effectively allocating resources, while fostering strong sponsor relations.',
        img:'./img/WorkImgs/HawkHack_Img.jpg'
    }

]


type ActivityInfo = {
    name:string,
    title:string,
    dates:string,
    description:string,
    img:string,
}

export { ActivityInfoArray };
export type { ActivityInfo };