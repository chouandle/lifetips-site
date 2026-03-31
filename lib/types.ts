export interface Article {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  summary: string;
  icon: string;
  iconBg: string;
  readTime: number;
  likes: string;
  author: string;
  publishDate: string; // YYYY-MM-DD format
  body: string; // HTML content
  createdAt?: string;
  updatedAt?: string;
}

export type Category = 'kitchen' | 'storage' | 'clean' | 'health' | 'diy' | 'all';

export interface ArticlePreview {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  summary: string;
  icon: string;
  iconBg: string;
  readTime: number;
  likes: string;
  author: string;
  publishDate: string;
}