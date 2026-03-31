import { Pool } from 'pg';

// 在 Vercel 部署时，框架会自动注入 DATABASE_URL
// 如果没有 DATABASE_URL，说明在本地开发，尝试构造连接
function getConnectionConfig() {
  if (process.env.DATABASE_URL) {
    // 生产环境：Vercel 自动注入的完整连接字符串
    return { connectionString: process.env.DATABASE_URL };
  }

  // 开发环境：使用分离的环境变量
  return {
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT || '5432'),
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    // 本地开发时需要通过 AWS CLI 获取临时密码
    // password 在运行时会被 Vercel 自动注入
    ssl: { rejectUnauthorized: false },
  };
}

let pool: Pool | null = null;

export async function getPool(): Promise<Pool> {
  if (pool) return pool;

  pool = new Pool({
    ...getConnectionConfig(),
    max: 10,
    idleTimeoutMillis: 30000,
  });

  return pool;
}

export async function query(text: string, params?: any[]): Promise<any> {
  const p = await getPool();
  const result = await p.query(text, params);
  return result.rows;
}