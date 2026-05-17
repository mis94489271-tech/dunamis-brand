import { motion } from 'motion/react';
import { Download, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function LeadGen() {
  const [slotsRemaining, setSlotsRemaining] = useState(2);
  
  // Fake countdown for remaining slots to create urgency
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() > 0.7) setSlotsRemaining(1);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative glass rounded-3xl p-12 md:p-20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-accent-cyan mb-6 px-4 py-1 rounded-full border border-accent-cyan/20 w-fit">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest">Limited Offer</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1]">
                    부의 아키텍처:<br />
                    <span className="text-gradient">무료 전자책 배포</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 font-light max-w-md">
                    상위 1%가 뇌를 사용하는 비밀의 메커니즘을 최초로 공개합니다. 지금 바로 신청하고 당신의 아키텍처를 바꾸는 첫 걸음을 떼십시오.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-8">
                     <div className="flex items-center gap-3 text-slate-300">
                       <CheckCircle className="w-5 h-5 text-accent-cyan" />
                       <span>인간의 뇌 성능을 결정짓는 3가지 변수</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-300">
                       <CheckCircle className="w-5 h-5 text-accent-cyan" />
                       <span>Gemini AI 기반 신경 패턴 분석법</span>
                     </div>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-8 w-fit">
                     <p className="text-red-400 text-sm font-bold animate-pulse">
                       현재 주간 상담 가능 슬롯: {slotsRemaining}개 남음
                     </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <div className="glass p-8 rounded-2xl border-white/10 shadow-3xl">
                  <h3 className="text-xl font-bold mb-6 text-center">지금 즉시 다운로드</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="text-xs font-mono text-slate-500 uppercase">Your Name</label>
                       <input 
                         type="text" 
                         placeholder="성함을 입력하세요"
                         className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-foreground focus:outline-none focus:border-accent-cyan transition-colors"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-mono text-slate-500 uppercase">Your Email</label>
                       <input 
                         type="email" 
                         placeholder="이메일을 입력하세요"
                         className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-foreground focus:outline-none focus:border-accent-cyan transition-colors"
                       />
                    </div>
                    <Button className="w-full h-16 bg-accent-cyan text-primary-dark font-black text-lg hover:glow-cyan">
                      <Download className="mr-2 w-5 h-5" />
                      전자책 PDF 무료 받기
                    </Button>
                    <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                      신청 시 개인정보 수집 및 마케팅 활용에 동의하게 됩니다.<br />
                      우리는 당신의 개인정보를 소중히 다루며 신경 데이터 보안을 최우선으로 합니다.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
