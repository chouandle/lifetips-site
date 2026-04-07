import { Article } from '@/lib/types';

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-10 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="text-teal hover:underline">Home</a>
          {' / '}
          <a href="/#articles" className="text-teal hover:underline">{article.categoryLabel}</a>
          {' / '}
          <span>{article.title}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
          <span>✍️ {article.author}</span>
          <span>📅 {article.publishDate}</span>
          <span>⏱ {article.readTime} min read</span>
          <span>👍 {article.likes}</span>
        </div>
      </div>
    </section>
  );
}