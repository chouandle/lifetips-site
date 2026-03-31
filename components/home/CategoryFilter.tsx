'use client';

import { useState } from 'react';
import { Category } from '@/lib/types';

interface CategoryFilterProps {
  onFilterChange: (category: Category) => void;
}

const categories = [
  { key: 'all' as Category, label: '全部' },
  { key: 'kitchen' as Category, label: '厨房技巧' },
  { key: 'storage' as Category, label: '收纳整理' },
  { key: 'clean' as Category, label: '环保清洁' },
  { key: 'health' as Category, label: '健康生活' },
  { key: 'diy' as Category, label: '创意 DIY' },
];

export function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <section className="py-9 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-teal text-white shadow-md'
                  : 'bg-white border-2 border-gray-200 text-gray-500 hover:border-teal hover:text-teal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}