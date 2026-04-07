export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-20 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-16">
        {/* Copy */}
        <div className="max-w-md">
          <span className="inline-block bg-teal text-white text-xs px-3 py-1 rounded-full mb-4 tracking-wider">
            B2B BUYING GUIDE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Smarter Buying<br />
            <span className="text-teal">for Serious Sellers</span>
          </h1>
          <p className="text-gray-500 mb-7 leading-relaxed">
            Practical guides on supplier sourcing, B2B platforms, logistics, and negotiation — everything you need to buy better and sell more.
          </p>
          <a
            href="#articles"
            className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all hover:-translate-y-0.5"
          >
            Explore Guides
          </a>
        </div>

        {/* Floating cards */}
        <div className="flex flex-col gap-4">
          {[
            { icon: '🏭', title: 'Find Verified Suppliers', sub: 'Sourcing & vetting tips' },
            { icon: '🚢', title: 'Optimize Your Logistics', sub: 'Cut shipping costs' },
            { icon: '🤝', title: 'Negotiate Better Deals', sub: 'Tactics that actually work' },
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