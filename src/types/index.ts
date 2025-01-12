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

export interface ScholarshipsLink {
  id: number;
  link: string;
  user: {
    fname : string
  }
  title: string;
  org:string;
  views:number;
  desc: string;
  postedOn: Date;
}

export interface JobLink {
  id: number;
  user: {
    fname : string
  }
  link: string;
  title: string;
  views:number;
  desc: string;
  postedOn: Date;
  role: string,
  skills:string[]
}

export interface softwareLink {
  id: number;
  user: {
    fname : string
  }
  link: string;
  title: string;
  views:number;
  desc: string;
  postedOn: Date;
  category: string
  version:string
}

export interface studyLink {
  id: number;
  user: {
    fname : string
  }
  link: string;
  title: string;
  views:number;
  desc: string;
  postedOn: Date;
  categories: string[]
}

export interface hackathonLink {
  id: number;
  user: {
    fname : string
  }
  link: string;
  title: string;
  views:number;
  desc: string;
  postedOn: Date;
  domain: String
  location: String
  prizepool:number
}


export type LinkCategory = 'scholarships' | 'study_materials' | 'hackathons' | 'software' | 'jobs';
