export type User = {
  id: string;
  username: string;
  avatarUrl: string;
};

export type Link = {
  id: string;
  title: string;
  url: string;
  description: string;
  category?: LinkCategory;
  isPublic: boolean;
  userId: string;
  createdAt: string;
  views: number;
  user: User;
};

export type LinkCategory = 'scholarships' | 'study_materials' | 'hackathons' | 'software' | 'jobs';