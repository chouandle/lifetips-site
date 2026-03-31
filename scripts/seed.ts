import { neon } from '@neondatabase/serverless';
import * as fs from 'fs';
import * as path from 'path';

interface ArticleData {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  summary: string;
  icon: string;
  iconBg: string;
  readTime: string;
  likes: string;
  author: string;
  publishDate: string;
  body: string;
}

async function seed() {
  // 检查环境变量
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL 环境变量未设置');
    console.log('请先运行: vercel env pull');
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // 读取文章数据
    const articlesPath = path.join(__dirname, '../data/articles.json');
    const articlesFile = fs.readFileSync(articlesPath, 'utf-8');
    const { articles } = JSON.parse(articlesFile) as { articles: ArticleData[] };

    console.log(`📖 读取到 ${articles.length} 篇文章`);

    // 清理现有数据
    await sql`DELETE FROM articles`;
    console.log('🗑️  清空 articles 表');

    // 插入数据
    for (const article of articles) {
      await sql`
        INSERT INTO articles (
          id, slug, category, category_label, title, summary,
          icon, icon_bg, read_time, likes, author, publish_date, body
        ) VALUES (
          ${article.id},
          ${article.slug},
          ${article.category},
          ${article.categoryLabel},
          ${article.title},
          ${article.summary},
          ${article.icon},
          ${article.iconBg},
          ${parseInt(article.readTime)},
          ${article.likes},
          ${article.author},
          ${article.publishDate}::date,
          ${article.body}
        )
      `;
      console.log(`✅ 插入文章: ${article.title}`);
    }

    // 验证结果
    const count = await sql`SELECT COUNT(*) as count FROM articles`;
    console.log(`\n🎉 成功导入 ${count[0].count} 篇文章到数据库！`);

  } catch (error) {
    console.error('❌ Seed 失败:', error);
    process.exit(1);
  }
}

seed();