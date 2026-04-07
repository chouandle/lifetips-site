const tips = [
  { icon: '🔍', title: 'Verify Suppliers Fast', desc: 'Check business licenses, certifications, and factory audits in 5 minutes.' },
  { icon: '💰', title: 'Cut Shipping Costs 40%', desc: 'Use DDP for small orders, consolidate with freight forwarders for bulk.' },
  { icon: '📊', title: 'Compare Platform Fees', desc: 'Alibaba vs. Global Sources vs. Made-in-China — which saves you more?' },
  { icon: '⚡', title: 'Speed Up Sample Orders', desc: 'Request samples via express couriers, not regular shipping (saves 2 weeks).' },
];

export function QuickTips() {
  return (
    <section className="bg-gradient-to-br from-teal to-teal-dark py-16 px-5 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-9">Quick Wins</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 transition-colors"
            >
              <span className="block text-4xl mb-3">{tip.icon}</span>
              <h4 className="font-semibold mb-2">{tip.title}</h4>
              <p className="text-sm opacity-85">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}