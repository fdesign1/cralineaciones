
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInstagram, faWhatsapp, faFacebook, faYoutube);

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a 
        href="https://instagram.com/cralineaciones" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <FontAwesomeIcon 
          icon={['fab', 'instagram']} 
          className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
        />
      </a>
      
      <a 
        href="https://wa.me/+5492914460056" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <FontAwesomeIcon 
          icon={['fab', 'whatsapp']} 
          className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
        />
      </a>
      
      <a 
        href="https://facebook.com/cralineaciones" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <FontAwesomeIcon 
          icon={['fab', 'facebook']} 
          className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
        />
      </a>
      
      <a 
        href="https://youtube.com/@cralineaciones" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="YouTube"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <FontAwesomeIcon 
          icon={['fab', 'youtube']} 
          className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
        />
      </a>
    </div>
  );
}
