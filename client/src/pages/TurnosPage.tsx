import * as React from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Calendar, Clock, Phone, MessageCircle, CheckCircle, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function TurnosPage() {
  usePageTitle({
    title: "Reservar Turno - Taller Mecánico Bahía Blanca",
    description: "Agenda tu turno online en CR Alineaciones Lubricentro. Alineación 3D, balanceo, cambio de aceite y servicios automotrices en Bahía Blanca. Reserva fácil y rápida.",
    keywords: "reservar turno Bahía Blanca, agendar cita taller, alineación 3D turno, balanceo ruedas cita, cambio aceite turno, CR Alineaciones reserva",
    canonicalUrl: "https://cralineaciones.com/turnos"
  });

  React.useEffect(() => {
    // Add CSS for better mobile centering
    const style = document.createElement('style');
    style.textContent = `
      .calendly-inline-widget {
        display: block !important;
        margin: 0 auto !important;
        text-align: center !important;
      }
      
      .calendly-inline-widget iframe {
        display: block !important;
        margin: 0 auto !important;
        max-width: 100% !important;
        width: 100% !important;
      }
      
      @media (max-width: 640px) {
        .calendly-inline-widget {
          min-width: 280px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    window.scrollTo(0, 0);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      
      // Cleanup style
      const existingStyle = document.querySelector('style');
      if (existingStyle && existingStyle.textContent?.includes('calendly-inline-widget')) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-full mb-6">
              <Calendar className="w-10 h-10 text-red-400" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Reserva tu
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Turno
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Agenda tu turno de forma fácil y rápida. Nuestro equipo está listo para atenderte en Bahía Blanca.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg font-medium">Reserva online 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-medium">Confirmación inmediata</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-lg font-medium">Servicio premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Selecciona tu horario
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Selecciona la fecha y hora que mejor se adapte a tu agenda. 
                Nuestro sistema te mostrará todos los horarios disponibles.
              </p>
            </div>

            {/* Calendly Widget Container */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Reserva tu turno</h3>
              </div>
              
              {/* Calendly Widget */}
              <div className="w-full flex justify-center">
                <div className="calendly-inline-widget rounded-2xl overflow-hidden shadow-lg w-full max-w-full" 
                     data-url="https://calendly.com/owifitam/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                     style={{
                       minWidth: '280px', 
                       maxWidth: '100%',
                       width: '100%',
                       height: '700px',
                       margin: '0 auto'
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-xl text-gray-300">
                Ofrecemos la mejor experiencia en reserva de turnos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full">
                  <Clock className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Horarios flexibles</h3>
              </div>

              <div className="text-center space-y-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Confirmación inmediata</h3>
              </div>

              <div className="text-center space-y-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full">
                  <Star className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Servicio premium</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Si tenés alguna duda o prefieres contactarnos directamente, 
              estamos acá para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/+5492914460056"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="relative z-10">WhatsApp</span>
                <div className="absolute inset-0 bg-green-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </a>
              
              <a
                href="tel:+5492914460056"
                className="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="relative z-10">Llamar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
