import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL 环境变量未设置');
}

export const sql = neon(process.env.DATABASE_URL);