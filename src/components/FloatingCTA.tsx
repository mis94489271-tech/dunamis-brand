import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <Button className="h-16 px-8 rounded-full bg-accent-cyan text-primary-dark font-black text-lg gap-3 glow-cyan hover:scale-105 transition-transform flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
            실시간 전문가 상담 신청
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
