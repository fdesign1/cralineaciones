import * as React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingCalendly() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="/turnos"
      className={cn(
        'fixed bottom-20 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transition-all duration-300 ease-in-out hover:from-red-500 hover:to-red-600 hover:scale-110',
        isScrolled ? 'scale-125' : 'scale-100'
      )}
      aria-label="Agendar turno con Calendly"
    >
      <Calendar className="h-6 w-6" />
    </a>
  );
}
