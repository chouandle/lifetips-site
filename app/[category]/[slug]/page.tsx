import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticle, getRelatedArticles } from '@/lib/queries';
import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleBody } from '@/components/article/ArticleBody';
import { RelatedArticles } from '@/components/article/RelatedArticles';

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.category, resolvedParams.slug);

  if (!article) {
    return {
      title: '文章未找到 - 生活妙招',
    };
  }

  return {
    title: `${article.title} - 生活妙招`,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.category, resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.category, article.id);

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleBody body={article.body} />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}