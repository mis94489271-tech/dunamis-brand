import { Brain, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <Brain className="w-8 h-8 text-accent-cyan" />
              <span className="text-xl font-bold tracking-tighter">
                BRAIN <span className="text-accent-cyan">RESET</span> LAB
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              우리는 인류의 인지 능력을 재정의합니다. 인공지능과 뉴로사이언스의 정점에서 개인의 최고의 버전을 설계합니다.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-cyan hover:border-accent-cyan transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-accent-cyan">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-foreground transition-colors">Elite Executive</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Future Talent</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Enterprise Cognitive</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Neuro-Feedback Lab</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-accent-cyan">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-foreground transition-colors">Clinical Data</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Free E-book</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog & Research</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-accent-cyan">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>서울특별시 강남구 테헤란로 뇌과학 빌딩 8층</li>
              <li>contact@brainreset.lab</li>
              <li>02-RESET-8888</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Brain Reset Lab. All neuro-patterns secured.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-600 uppercase tracking-widest font-mono">
             <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
