
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Button } from '@/components/ui/button';

library.add(faInstagram, faWhatsapp);

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <a href="https://instagram.com/cralineaciones" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Button variant="ghost" size="icon">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Button>
      </a>
      <a href="https://wa.me/+5492914460056" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <Button variant="ghost" size="icon">
          <FontAwesomeIcon icon={['fab', 'whatsapp']} className="h-5 w-5" />
          <span className="sr-only">WhatsApp</span>
        </Button>
      </a>
    </div>
  );
}
