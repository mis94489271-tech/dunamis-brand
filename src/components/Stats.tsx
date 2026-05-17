import { motion } from 'motion/react';

const stats = [
  { label: 'AI 분석 정밀도', value: '99.9%', sub: 'Google Gemini Pro 연동' },
  { label: '임상 데이터베이스', value: '5,000+', sub: '독자적 뉴로피드백 축적' },
  { label: '고객 만족도 및 성공률', value: '98%', sub: '리셋 성공률 기준' },
  { label: '평균 IQ/집중력 향상', value: '15pt', sub: '3개월 훈련 프로그램 후' },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative group"
            >
              <div className="absolute -inset-4 bg-accent-cyan/5 rounded-2xl scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all" />
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-black text-accent-cyan mb-2 font-mono tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500 font-mono lower-case tracking-widest uppercase">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
