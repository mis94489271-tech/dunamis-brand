import { motion } from 'motion/react';
import { Search, PenTool, Activity, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'AI 정밀 분석',
    desc: '구글 Gemini AI와 뇌파 측정 데이터를 결합하여 당신의 무의식 패턴을 0.1ms 단위로 스캔합니다.',
  },
  {
    icon: PenTool,
    title: '아키텍처 설계',
    desc: '분석된 데이터를 기반으로 최적화된 마인드셋과 인지 구조를 디지털 트윈으로 설계합니다.',
  },
  {
    icon: Activity,
    title: '뉴로피드백 훈련',
    desc: '첨단 장비와 함께 설계된 아키텍처를 실제 신경망에 각인시키는 몰입형 훈련을 진행합니다.',
  },
  {
    icon: Rocket,
    title: '라이프 최적화',
    desc: '리셋된 뇌의 성능이 당신의 비즈니스와 일상에서 결과로 증명되는 단계입니다.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            압도적 결과를 위한 <span className="text-accent-cyan">4단계 리셋 프로세스</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            데이터는 거짓말을 하지 않습니다. 과학적이고 체계적인 접근으로 당신의 뇌를 다시 태어나게 합니다.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan/20 via-accent-violet/20 to-accent-cyan/20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 rounded-full glass border-2 border-accent-cyan/30 flex items-center justify-center mx-auto mb-8 relative">
                   <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-cyan text-primary-dark font-black flex items-center justify-center text-xs">
                     {i + 1}
                   </div>
                   <step.icon className="w-10 h-10 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
