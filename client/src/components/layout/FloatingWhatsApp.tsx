
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/lib/utils';

library.add(faWhatsapp);

export function FloatingWhatsApp() {
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
      href="https://wa.me/+5492914460056"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-green-600',
        isScrolled ? 'scale-125' : 'scale-100'
      )}
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={['fab', 'whatsapp']} className="h-6 w-6" />
    </a>
  );
}
