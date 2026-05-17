import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GNB() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '서비스', href: '#services' },
    { name: '프로세스', href: '#process' },
    { name: '성과보고', href: '#stats' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-bottom border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <Brain className="w-8 h-8 text-accent-cyan group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold tracking-tighter text-foreground">
            BRAIN <span className="text-accent-cyan">RESET</span> LAB
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-accent-cyan transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="outline" className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-primary-dark transition-all rounded-full px-6">
            무료 진단 신청
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-slate-400 hover:text-accent-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-accent-cyan text-primary-dark hover:bg-accent-cyan/90 rounded-full py-6">
              무료 진단 신청
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
