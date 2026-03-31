import { sql } from './db';
import { Article, ArticlePreview } from './types';

// 获取所有文章（首页用）
export async function getAllArticles(): Promise<ArticlePreview[]> {
  const result = await sql`
    SELECT
      id, slug, category, category_label, title, summary,
      icon, icon_bg, read_time, likes, author, publish_date
    FROM articles
    ORDER BY publish_date DESC
  `;

  return result.map((row: any) => ({
    id: row.id,
    slug: row.slug,
    category: row.category,
    categoryLabel: row.category_label,
    title: row.title,
    summary: row.summary,
    icon: row.icon,
    iconBg: row.icon_bg,
    readTime: row.read_time,
    likes: row.likes,
    author: row.author,
    publishDate: row.publish_date,
  }));
}

// 根据分类和 slug 获取单篇文章
export async function getArticle(category: string, slug: string): Promise<Article | null> {
  const result = await sql`
    SELECT * FROM articles
    WHERE category = ${category} AND slug = ${slug}
    LIMIT 1
  `;

  if (result.length === 0) {
    return null;
  }

  const row = result[0];
  return {
    id: row.id,
    slug: row.slug,
    category: row.category,
    categoryLabel: row.category_label,
    title: row.title,
    summary: row.summary,
    icon: row.icon,
    iconBg: row.icon_bg,
    readTime: row.read_time,
    likes: row.likes,
    author: row.author,
    publishDate: row.publish_date,
    body: row.body,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// 获取相关文章（同分类，排除当前文章）
export async function getRelatedArticles(category: string, excludeId: string): Promise<ArticlePreview[]> {
  const result = await sql`
    SELECT
      id, slug, category, category_label, title, summary,
      icon, icon_bg, read_time, likes, author, publish_date
    FROM articles
    WHERE category = ${category} AND id != ${excludeId}
    ORDER BY publish_date DESC
    LIMIT 3
  `;

  return result.map((row: any) => ({
    id: row.id,
    slug: row.slug,
    category: row.category,
    categoryLabel: row.category_label,
    title: row.title,
    summary: row.summary,
    icon: row.icon,
    iconBg: row.icon_bg,
    readTime: row.read_time,
    likes: row.likes,
    author: row.author,
    publishDate: row.publish_date,
  }));
}