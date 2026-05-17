/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Toaster } from '@/components/ui/sonner';
import GNB from './components/GNB';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import LeadGen from './components/LeadGen';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-cyan selection:text-primary-dark">
      <GNB />
      
      <main>
        <Hero />
        <Stats />
        
        {/* Comparison Section (Abstract Before/After) */}
        <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <h2 className="text-4xl md:text-5xl font-black leading-tight">
               당신의 뇌는 지금<br />
               <span className="text-slate-600 italic">성능의 한계</span> 에 <br />갇혀 있습니까?
             </h2>
             <p className="text-slate-400 text-lg font-light leading-relaxed">
               단순한 의지력의 문제가 아닙니다. 뇌의 아키텍처 자체가 시대의 속도를 따라가지 못하고 있을 뿐입니다. 우리는 비효율적인 연산 회로를 차단하고, 새로운 고속 도로를 엽니다.
             </p>
             <div className="grid grid-cols-2 gap-4 pt-8">
               <div className="p-6 glass rounded-2xl border-l-4 border-slate-700">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-2">Before</span>
                  <p className="font-bold text-slate-300">혼돈의 마인드셋</p>
                  <p className="text-xs text-slate-600 mt-1">에너지 분산, 결정 장애, 만성 스트레스</p>
               </div>
               <div className="p-6 glass rounded-2xl border-l-4 border-accent-cyan">
                  <span className="text-xs font-mono text-accent-cyan uppercase block mb-2">After</span>
                  <p className="font-bold text-foreground">최적화된 아키텍처</p>
                  <p className="text-xs text-slate-500 mt-1">압도적 몰입, 냉철한 직관, 무결점 추진력</p>
               </div>
             </div>
          </div>
          <div className="relative aspect-square glass rounded-full flex items-center justify-center p-12 overflow-hidden border-white/5 glow-violet">
             <div className="absolute inset-0 bg-radial-gradient from-accent-violet/20 to-transparent animate-pulse" />
             <div className="relative w-full h-full border-4 border-white/10 rounded-full border-dashed animate-spin-slow" />
             <div className="absolute inset-20 border-2 border-accent-cyan/20 rounded-full animate-spin-reverse-slow" />
             <div className="text-center z-10">
                <span className="text-7xl">🧠</span>
                <p className="mt-4 font-mono text-xs tracking-widest text-accent-cyan uppercase">Neural Resonance</p>
             </div>
          </div>
        </section>

        <Services />
        <Process />
        <Testimonials />
        <LeadGen />
      </main>

      <Footer />
      <FloatingCTA />
      <Toaster position="top-right" />
    </div>
  );
}
