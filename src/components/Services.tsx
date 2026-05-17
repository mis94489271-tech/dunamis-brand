import { motion } from 'motion/react';
import { Target, Users, Building2, Terminal, Zap, Fingerprint } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    icon: Target,
    title: 'Elite Executive',
    target: 'CEO / 전문직 / 트레이더',
    description: '결정의 질이 삶의 질을 바꿉니다. 의사결정 속도와 감정 조절력을 극대화하여 최고의 성과를 도출합니다.',
    features: ['실시간 뇌파 대시보드', '감정 편향 제거 훈련', '스트레스 내성 200% 강화'],
    color: 'accent-cyan',
  },
  {
    icon: Users,
    title: 'Future Talent',
    target: '학생 / 수험생 / 학부모',
    description: '공부 시간이 중요한 게 아닙니다. 학습 몰입도와 기억 저장 메커니즘을 최적화하여 압도적인 성취를 완성합니다.',
    features: ['집중력 골든타임 분석', '메타인지 강화 솔루션', '기억력 저장 최적화'],
    color: 'accent-violet',
  },
  {
    icon: Building2,
    title: 'Cognitive Enterprise',
    target: '기업용 빌딩즈 / 조직 전용',
    description: '구성원들의 인지 에너지를 동기화합니다. 팀 전체의 창의성과 협업 효율을 과학적으로 관리합니다.',
    features: ['팀 코워킹 뇌파 동기화', '조직 탄력성 시뮬레이터', '맞춤형 AI 복지 솔루션'],
    color: 'white',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            타겟별 맞춤형 <span className="text-accent-cyan">브레인 아키텍처</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            당신의 분야에서 압도적인 격차를 만드십시오. 분야별 전문화된 뇌 최적화 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full glass border-white/10 hover:border-accent-cyan/50 hover:glow-cyan transition-all duration-500 group">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${tier.color}/10 group-hover:scale-110 transition-transform`}>
                    <tier.icon className={`w-8 h-8 text-${tier.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{tier.title}</CardTitle>
                  <CardDescription className="text-accent-cyan font-mono text-xs tracking-widest uppercase mb-4">
                    Target: {tier.target}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-400 mb-8 font-light leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-slate-300">
                        <Zap className="w-4 h-4 text-accent-cyan shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-transparent border border-white/20 hover:bg-accent-cyan hover:border-accent-cyan hover:text-primary-dark transition-all rounded-full group-hover:glow-cyan">
                    솔루션 상세 보기
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
