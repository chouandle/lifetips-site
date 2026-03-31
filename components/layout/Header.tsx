import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-teal tracking-wide">
          生活妙招
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-teal transition-colors">最新</Link>
          <Link href="/#articles" className="text-sm text-gray-500 hover:text-teal transition-colors">分类</Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-teal transition-colors">精选</Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-teal transition-colors">关于</Link>
        </nav>
      </div>
    </header>
  );
}