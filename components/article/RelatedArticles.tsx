import Link from 'next/link';
import { ArticlePreview } from '@/lib/types';

interface RelatedArticlesProps {
  articles: ArticlePreview[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-gray-50 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${article.category}/${article.slug}`}
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{article.icon}</span>
                <span className="text-xs text-teal font-semibold uppercase tracking-wider">
                  {article.categoryLabel}
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
              <p className="text-gray-500 text-sm">{article.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}