import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceSection } from '@/components/features/services/ServiceSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aceite from '@/assets/aceite.png';
import Frenos from '@/assets/brake.png';
import Alineacion3D from '@/assets/alineacion.png';
import Embragues from '@/assets/cambios.png';
import Distribucion from '@/assets/distribucion2.jpg';
import TrenDelantero from '@/assets/trendelantero.png';
import Suspension from '@/assets/suspension.png';
import Bateria from '@/assets/battery.jpg';
import Rims from '@/assets/rims2.png';
import Balanceo from '@/assets/balanceo2.png';

const servicesData = [
  {
    id: 'aceite',
    title: 'Cambio de Aceite',
    description: 'Realizamos cambios de aceite con productos de primera calidad, tanto sintéticos como minerales. Mantener el aceite limpio y en buen estado protege el motor, mejora su rendimiento y alarga su vida útil.',
    imageUrl: Aceite,
    imagePosition: 'right',
  },
  {
    id: 'frenos',
    title: 'Frenos',
    description: 'Revisamos y reemplazamos pastillas, discos y todo el sistema de frenos para garantizar tu seguridad. Un buen mantenimiento de frenos asegura una respuesta rápida y confiable en cada frenada.',
    imageUrl: Frenos,
    imagePosition: 'left',
  },
  {
    id: 'alineacion',
    title: 'Alineación 3D',
    description: 'Utilizamos tecnología 3D de última generación para alinear perfectamente tu vehículo. La alineación correcta mejora el manejo, reduce el desgaste de neumáticos y optimiza el consumo de combustible.',
    imageUrl: Alineacion3D,
    imagePosition: 'right',
  },
  {
    id: 'embragues',
    title: 'Embragues',
    description: 'Reparamos y reemplazamos embragues para vehículos manuales. Un embrague en buen estado garantiza cambios de marcha suaves y un mejor rendimiento del motor.',
    imageUrl: Embragues,
    imagePosition: 'left',
  },
  {
    id: 'distribucion',
    title: 'Distribución',
    description: 'Mantenemos y reparamos el sistema de distribución de tu motor. Una distribución correcta es fundamental para el funcionamiento óptimo y la durabilidad del motor.',
    imageUrl: Distribucion,
    imagePosition: 'right',
  },
  {
    id: 'tren-delantero',
    title: 'Tren Delantero',
    description: 'Revisamos y reparamos todos los componentes del tren delantero: amortiguadores, bujes, terminales y rótulas. Un tren delantero en buen estado mejora la estabilidad y el confort de marcha.',
    imageUrl: TrenDelantero,
    imagePosition: 'left',
  },
  {
    id: 'suspension',
    title: 'Suspensión',
    description: 'Reparamos y mantenemos el sistema de suspensión de tu vehículo. Una suspensión en buen estado garantiza mayor comodidad, estabilidad y seguridad en la conducción.',
    imageUrl: Suspension,
    imagePosition: 'right',
  },
  {
    id: 'bateria',
    title: 'Batería',
    description: 'Revisamos, cargamos y reemplazamos baterías para mantener tu vehículo siempre listo. También verificamos el sistema de carga para asegurar un funcionamiento óptimo.',
    imageUrl: Bateria,
    imagePosition: 'left',
  },
  {
    id: 'rims',
    title: 'Rims y Llantas',
    description: 'Ofrecemos servicios de montaje, balanceo y reparación de rims y llantas. Trabajamos con las mejores marcas para garantizar durabilidad y rendimiento.',
    imageUrl: Rims,
    imagePosition: 'right',
  },
  {
    id: 'balanceo',
    title: 'Balanceo',
    description: 'Realizamos balanceo computarizado de ruedas para eliminar vibraciones y mejorar el confort de marcha. Un balanceo correcto prolonga la vida útil de los neumáticos.',
    imageUrl: Balanceo,
    imagePosition: 'left',
  },
];

export function ServicesPage() {
  const location = useLocation();

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Nuestros
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Servicios
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluciones completas para el mantenimiento y reparación de tu vehículo. 
              Calidad garantizada y atención personalizada en Bahía Blanca.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-lg font-medium">Experiencia</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-lg font-medium">Tecnología 3D</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-lg font-medium">Lubricentro premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-20">
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <ServiceSection
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                imagePosition={service.imagePosition as 'left' | 'right'}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para cuidar tu vehículo?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y agenda tu turno. Nuestro equipo está listo para atenderte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/turnos"
                className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Solicitar turno</span>
                <div className="absolute inset-0 bg-white rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </a>
              <a 
                href="https://wa.me/+5492914460056"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Consultar precios</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}