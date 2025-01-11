export type User = {
  id: string;
  username: string;
  avatarUrl: string;
};

export type Link = {
id: number;
    userId: number;
    link: string;
    title: string;
    desc: string;
    postedOn: Date;
};


export type ScholarshipLink = {
    id: number;
    userId: number;
    link: string;
    title: string;
    desc: string;
  postedOn: Date;
    postedBy:string
  org:string;
  views:number;
};

export type LinkCategory = 'scholarships' | 'study_materials' | 'hackathons' | 'software' | 'jobs';
