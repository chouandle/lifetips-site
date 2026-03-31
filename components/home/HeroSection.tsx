export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-20 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-16">
        {/* 文案 */}
        <div className="max-w-md">
          <span className="inline-block bg-teal text-white text-xs px-3 py-1 rounded-full mb-4 tracking-wider">
            每日一招
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            让生活变得<br />
            <span className="text-teal">更聪明、更简单</span>
          </h1>
          <p className="text-gray-500 mb-7 leading-relaxed">
            收录厨房、收纳、清洁、健康等各类实用小技巧，助你轻松应对日常生活。
          </p>
          <a
            href="#articles"
            className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all hover:-translate-y-0.5"
          >
            探索技巧
          </a>
        </div>

        {/* 浮动卡片 */}
        <div className="flex flex-col gap-4">
          {[
            { icon: '🍋', title: '柠檬去油污', sub: '厨房必备技巧' },
            { icon: '🧺', title: '收纳空间翻倍', sub: '整理达人秘籍' },
            { icon: '🌿', title: '天然清洁剂', sub: '环保又省钱' },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl px-6 py-4 flex items-center gap-4 shadow-md hover:translate-x-1.5 transition-transform min-w-[220px]"
            >
              <span className="text-3xl">{card.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}