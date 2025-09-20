
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
    id: 'balanceo',
    title: 'Balanceo',
    description: 'El balanceo de ruedas evita vibraciones al conducir y mejora la estabilidad del vehículo. Utilizamos equipamiento computarizado para asegurar un desgaste uniforme de los neumáticos y mayor confort al manejar. Es muy fácil sentir cuando el auto está mal balanceado. Al llegar a ciertas velocidades sentirás en el volante la vibración del vehículo, esto significa que la cubierta tiene un “abultamiento” o que los neumáticos están desbalanceados. Lo recomendable es verificar cuál de las dos causas es. Si es un abultamiento, cambia el neumático. Es importante saber que las cubiertas se cambian por par, si la cubierta trasera izquierda tiene este problema, tendrás que cambiar de igual manera la derecha. Si está desbalanceado, balancearlo. Así se evitará un desgaste irregular del neumático, además de no sentir esa molestia de las vibraciones en el volante. Otro beneficio del balanceo, es que se economiza un poco el combustible porque la cubierta tiene un buen agarre en el piso y no va bailando.',
    imageUrl: Balanceo,
    imagePosition: 'right',
  },
  {
    id: 'lubricentro',
    title: 'Lubricentro',
    description: 'Ofrecemos un servicio completo de lubricación para motor, caja y diferencial, además del control y reposición de fluidos. Esto ayuda a prevenir desgastes prematuros y mantiene tu vehículo siempre en óptimas condiciones.',
    imageUrl: 'https://neumarep.cl/wp-content/uploads/2025/03/Lubricentro.webp',
    imagePosition: 'left',
  },
  {
    id: 'alineacion3d',
    title: 'Alineación 3D',
    description: 'Se recomienda realizar la alineación de neumáticos dos veces al año. Aunque esto, no es una ciencia cierta, ya que cada vehículo es diferente. De igual manera, se recomiendan alinear ambos ejes del auto, es decir la parte delantera y la trasera. ¿Por qué los dos y no solo uno? Si uno de los neumáticos está un poco abierto, cerrado o con una diferente inclinación, además de que crea un mayor desgaste sobre los otros neumáticos, ocasiona que el vehículo se comporte errático, es decir, que no sea tan preciso en sus movimientos, trayendo como consecuencia accidentes automovilísticos.Por seguridad o durabilidad de los neumáticos es importante hacer estas alineaciones. ¡No te olvides! De esta manera, tu vehículo será más seguro y el desgaste más parejo en tus cubiertas.',
    imageUrl: Alineacion3D,
    imagePosition: 'right',
  },
  {
    id: 'embragues',
    title: 'Embragues',
    description: 'En nuestro taller realizamos mantenimiento y reparación de embragues, asegurando un cambio suave de marchas y prolongando la vida útil de tu vehículo. Sustituimos discos, platillos y rodamientos con repuestos de calidad para un funcionamiento óptimo.',
    imageUrl: Embragues,
    imagePosition: 'left',
  },
   {
    id: 'distribucion',
    title: 'Distribución',
    description: 'Nos encargamos del mantenimiento y reemplazo de correas y cadenas de distribución, garantizando la sincronización perfecta del motor. Un sistema de distribución en buen estado evita fallos mecánicos graves y asegura el rendimiento eficiente de tu vehículo.',
    imageUrl: Distribucion,
    imagePosition: 'right',
  },
  {
    id: 'trendelantero',
    title: 'Tren Delantero',
    description: 'Nos especializamos en la reparación y ajuste del tren delantero: rótulas, parrillas, bujes, extremos de dirección y amortiguadores. Un tren delantero en buen estado brinda seguridad, confort y mayor vida útil a tus neumáticos.',
    imageUrl: TrenDelantero,
    imagePosition: 'left',
  },
  {
    id: 'suspension',
    title: 'Suspensión',
    description: 'Revisamos y reparamos amortiguadores, espirales y otros componentes de la suspensión para garantizar un manejo suave y seguro. Una suspensión en buen estado absorbe irregularidades del camino y mejora la estabilidad.',
    imageUrl: Suspension,
    imagePosition: 'right',
  },
  {
    id: 'baterias',
    title: 'Baterías',
    description: 'Ofrecemos control, diagnóstico y reemplazo de baterías. Trabajamos con las mejores marcas para asegurar un arranque confiable y el correcto funcionamiento del sistema eléctrico de tu vehículo.',
    imageUrl: Bateria,
    imagePosition: 'left',
  },
  {
    id: 'enderezadodellantas',
    title: 'Enderezado de Llantas',
    description: 'Reparamos llantas deformadas o golpeadas con herramientas especializadas. Un correcto enderezado mejora el contacto de la rueda con el asfalto, evita vibraciones y alarga la vida de neumáticos y suspensión.',
    imageUrl: Rims,
    imagePosition: 'right',
  }
];


export function ServicesPage() {
  const location = useLocation();

  React.useEffect(() => {
    // Initialize AOS
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
              Soluciones para el mantenimiento y reparación de tu vehículo. 
              Calidad garantizada y atención personalizada.
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
              <button className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Solicitar turno</span>
                <div className="absolute inset-0 bg-white rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </button>
              <button className="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Consultar precios</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
