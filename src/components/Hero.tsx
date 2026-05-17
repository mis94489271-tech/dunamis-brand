import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrainVisual from './BrainVisual';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BrainVisual />
      
      <div className="absolute inset-0 bg-radial-gradient from-accent-cyan/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">
              AI Powered Brain Architecture Lab
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8"
        >
          인생의 결과를 바꾸는<br />
          <span className="text-gradient">뇌의 설계자</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          무의식의 속도를 제어하고 잠재력을 폭발시키십시오.<br className="hidden md:block" />
          구글 Gemini AI와 뉴로피드백을 결합한 최첨단 정밀 분석으로 <br />당신의 뇌를 리셋합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Button className="h-16 px-10 rounded-full bg-accent-cyan text-primary-dark font-bold text-lg hover:scale-105 transition-transform glow-cyan">
            무료 브레인 리셋 진단 시작
            <ChevronRight className="ml-2" />
          </Button>
          <Button variant="ghost" className="h-16 px-10 rounded-full text-foreground hover:bg-white/5 font-semibold text-lg">
            임상 데이터 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Dashboard Preview Hint */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-2xl blur opacity-20" />
          <div className="relative glass rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
               {/* Simulating a complex data visualization dashboard */}
               <div className="grid grid-cols-3 gap-6 w-full h-full p-8 opacity-60">
                  <div className="col-span-2 glass rounded-xl flex items-end p-6 gap-2">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 55].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                        className="flex-1 bg-accent-cyan/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="glass rounded-xl p-6 flex flex-col gap-4">
                    <div className="w-full h-24 rounded-full border-4 border-dashed border-accent-violet/30 animate-spin-slow flex items-center justify-center">
                       <BrainVisual />
                    </div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-4 bg-white/10 rounded-full w-full overflow-hidden">
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                          className="h-full w-1/2 bg-accent-violet/50"
                        />
                      </div>
                    ))}
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-sm tracking-[0.5em] text-white/40 uppercase">Analyzing Neural Patterns...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
