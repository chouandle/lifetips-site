import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div>
            <div className="text-xl font-bold text-teal mb-3">生活妙招</div>
            <p className="text-sm">每天一个小技巧，让生活更美好。</p>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">内容</h5>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-teal transition-colors">最新文章</Link>
              <Link href="/#articles" className="block hover:text-teal transition-colors">分类浏览</Link>
            </div>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">关于</h5>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block hover:text-teal transition-colors">关于我们</Link>
              <Link href="#" className="block hover:text-teal transition-colors">隐私政策</Link>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 pt-5">
          © 2026 生活妙招. All rights reserved.
        </p>
      </div>
    </footer>
  );
}