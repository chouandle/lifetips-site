import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div>
            <div className="text-xl font-bold text-teal mb-3">SourceSmart</div>
            <p className="text-sm">Expert B2B buying tips and ecommerce guidance for serious sellers.</p>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">Content</h5>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-teal transition-colors">Latest Articles</Link>
              <Link href="/#articles" className="block hover:text-teal transition-colors">Browse Categories</Link>
            </div>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">About</h5>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block hover:text-teal transition-colors">About Us</Link>
              <Link href="#" className="block hover:text-teal transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 pt-5">
          © 2026 SourceSmart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}