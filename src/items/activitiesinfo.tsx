const ActivityInfoArray = [
    {
        name:'Computing Club',
        title:'Treasurer',
        dates:'2022 - 2025',
        description:'Developed an automated spreadsheet with user-input functionality, led oversign of SGA budget requests and proposals, and collaborate with other eboard members to plan various events.',
        img:''
    },

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