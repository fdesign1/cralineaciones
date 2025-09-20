
import * as React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import FerreDev from '@/assets/ferredev.png';

library.add(faMapMarkerAlt, faPhone, faEnvelope, faClock, faCalendarAlt);

export function Footer() {
  return (
    <footer className="text-secondary-foreground bg-[#191616ff]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Shop Details */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">
              CR Alineaciones Lubricentro
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon 
                  icon={['fas', 'map-marker-alt']} 
                  className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" 
                />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Remedios de Escalada 366
                    <br />
                    Bahía Blanca, B8000
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FontAwesomeIcon 
                  icon={['fas', 'phone']} 
                  className="h-5 w-5 text-green-500 flex-shrink-0" 
                />
                <a 
                  href="tel:+5492914460056" 
                  className="text-sm text-muted-foreground hover:text-white transition-colors duration-300"
                >
                  +54 9 291 446-0056
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FontAwesomeIcon 
                  icon={['fas', 'envelope']} 
                  className="h-5 w-5 text-blue-500 flex-shrink-0" 
                />
                <a 
                  href="mailto:jonaiturre@icloud.com" 
                  className="text-sm text-muted-foreground hover:text-white transition-colors duration-300"
                >
                  jonaiturre@icloud.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Síguenos</h4>
              <SocialLinks />
            </div>
          </div>

          {/* Column 2: Schedule */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white flex items-center gap-2">
              <FontAwesomeIcon 
                icon={['fas', 'clock']} 
                className="h-5 w-5 text-yellow-500" 
              />
              Horario de Atención
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon 
                  icon={['fas', 'calendar-alt']} 
                  className="h-4 w-4 text-blue-500 flex-shrink-0" 
                />
                <div>
                  <p className="text-sm font-medium text-white">Lunes - Viernes</p>
                  <p className="text-sm text-muted-foreground">8:00 AM - 17:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FontAwesomeIcon 
                  icon={['fas', 'calendar-alt']} 
                  className="h-4 w-4 text-green-500 flex-shrink-0" 
                />
                <div>
                  <p className="text-sm font-medium text-white">Sábados</p>
                  <p className="text-sm text-muted-foreground">8:00 AM - 13:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FontAwesomeIcon 
                  icon={['fas', 'calendar-alt']} 
                  className="h-4 w-4 text-red-500 flex-shrink-0" 
                />
                <div>
                  <p className="text-sm font-medium text-white">Domingos</p>
                  <p className="text-sm text-muted-foreground">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white flex items-center gap-2">
              <FontAwesomeIcon 
                icon={['fas', 'map-marker-alt']} 
                className="h-5 w-5 text-red-500" 
              />
              Nuestra Ubicación
            </h3>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4585442593675!2d-62.24657642402484!3d-38.730238571760324!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x95eda312c15fc1cd%3A0x50b1cf900bcdcd5d!2sCR%20ALINEACIONES%20LUBRICENTRO!5e0!3m2!1ses-419!2spl!4v1757430983622!5m2!1ses-419!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación CR Alineaciones"
                className="w-full h-full"
              />
            </div>
            
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                <FontAwesomeIcon 
                  icon={['fas', 'map-marker-alt']} 
                  className="h-3 w-3 text-red-500 mr-1" 
                />
                Remedios de Escalada 366, Bahía Blanca
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CR Alineaciones. Todos los derechos reservados. |{' '}
            <Link to="/privacy-policy" className="hover:text-primary">Política de Privacidad</Link>
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-xs text-muted-foreground">
              Sitio desarrollado por
            </span>
            <div className="flex items-center gap-2 group cursor-pointer bg-white/5 px-0 py-1 rounded-md hover:bg-white/10 transition-all duration-300">
              <img 
                src={FerreDev} 
                alt="Ferre Dev" 
                className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-125 filter brightness-110 contrast-110 drop-shadow-lg"
              />
              <span className="text-xs font-bold text-muted-foreground transition-colors duration-300 group-hover:text-white">
                Ferre Dev | Tecnología web
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
