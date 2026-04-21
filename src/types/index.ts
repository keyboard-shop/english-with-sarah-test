export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  youtubeUrl?: string;
  readingTime: string;
}

export type Theme = 'light' | 'dark';

export interface AppState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
