const tips = [
  { icon: '🍵', title: '茶叶除冰箱异味', desc: '干茶叶装入纱布袋放入冰箱，一周换一次。' },
  { icon: '📱', title: '手机屏幕快速消毒', desc: '75% 酒精棉片轻擦，30 秒即可，安全不伤屏。' },
  { icon: '🧦', title: '用旧袜子擦窗户', desc: '套在手上喷水擦，比抹布效果好，零成本。' },
  { icon: '🌱', title: '淘米水浇花', desc: '含有机物和矿物质，是天然肥料，植物更茁壮。' },
];

export function QuickTips() {
  return (
    <section className="bg-gradient-to-br from-teal to-teal-dark py-16 px-5 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-9">60 秒速效妙招</h2>
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