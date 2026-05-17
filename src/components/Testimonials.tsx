import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: '김OO',
    role: 'IT 핀테크 기업 CEO',
    text: '중요한 의사결정 순간마다 뇌가 멈추는 기분을 느꼈습니다. 리셋 연구소의 정밀 분석 후, 제 뇌의 과부하 원인을 명확히 파악했고 현재는 이전보다 2배 빠른 판단력으로 회사를 이끌고 있습니다.',
    avatar: 'K',
  },
  {
    name: '이OO',
    role: '해외 헤지펀드 트레이더',
    text: '시장의 변동성 앞에서 흔들리던 멘탈이 뉴로피드백 훈련 후 완전히 달라졌습니다. 감정에 휩쓸리지 않고 차가운 이성으로 데이터를 읽는 것, 그것이 제 수익률의 비결이 되었습니다.',
    avatar: 'L',
  },
  {
    name: '박OO',
    role: '대입 수험생 학부모',
    text: '아이가 늘 집중력이 부족해 고민이었는데, 인지 구조 설계 훈련 후 스스로 공부 환경을 통제하기 시작했습니다. 단순한 공부법이 아니라 뇌 자체를 최적화하는 것이 정답이었습니다.',
    avatar: 'P',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-gradient">증명된 변화, 리셋을 경험한 사람들</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass border-white/5 h-full relative group">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 group-hover:text-accent-cyan/10 transition-colors" />
                <CardContent className="p-8">
                  <p className="text-slate-300 italic mb-8 relative z-10 font-light leading-relaxed">
                    "{rev.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-primary-dark">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{rev.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{rev.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
