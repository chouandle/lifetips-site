'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArticlePreview, Category } from '@/lib/types';
import { CategoryFilter } from './CategoryFilter';

interface ArticleGridProps {
  articles: ArticlePreview[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredArticles = articles.filter(
    (article) => activeCategory === 'all' || article.category === activeCategory
  );

  return (
    <section id="articles" className="pb-16">
      <CategoryFilter onFilterChange={setActiveCategory} />
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/${article.category}/${article.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5"
            >
              <div
                className="h-32 flex items-center justify-center text-5xl"
                style={{ backgroundColor: article.iconBg }}
              >
                {article.icon}
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold text-teal uppercase tracking-wider mb-2">
                  {article.categoryLabel}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {article.summary}
                </p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span>⏱ {article.readTime} 分钟</span>
                  <span>👍 {article.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}