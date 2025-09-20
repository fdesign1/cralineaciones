
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInstagram, faWhatsapp);

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a 
        href="https://instagram.com/cralineaciones" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
        className="group flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-300"
      >
        <FontAwesomeIcon 
          icon={['fab', 'instagram']} 
          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
        />
      </a>
      
      <a 
        href="https://wa.me/+5492914460056" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
        className="group flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-300"
      >
        <FontAwesomeIcon 
          icon={['fab', 'whatsapp']} 
          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
        />
      </a>
    </div>
  );
}
