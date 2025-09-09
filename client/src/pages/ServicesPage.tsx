import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceSection } from '@/components/features/services/ServiceSection';


const servicesData = [
  {
    id: 'aceite',
    title: 'Cambio de Aceite',
    description: 'Realizamos cambios de aceite con productos de primera calidad, tanto sintéticos como minerales. Mantener el aceite limpio y en buen estado protege el motor, mejora su rendimiento y alarga su vida útil.',
    imageUrl: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right',
  },
  {
    id: 'frenos',
    title: 'Frenos',
    description: 'Revisamos y reemplazamos pastillas, discos y todo el sistema de frenos para garantizar tu seguridad. Un buen mantenimiento de frenos asegura una respuesta rápida y confiable en cada frenada.',
    imageUrl: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJha2VzJTIwY2FyfGVufDB8fDB8fHwy',
    imagePosition: 'left',
  },
  {
    id: 'balanceo',
    title: 'Balanceo',
    description: 'El balanceo de ruedas evita vibraciones al conducir y mejora la estabilidad del vehículo. Utilizamos equipamiento computarizado para asegurar un desgaste uniforme de los neumáticos y mayor confort al manejar.',
    imageUrl: 'https://i.imgur.com/pNJC9wT.jpeg',
    imagePosition: 'right',
  },
  {
    id: 'lubricentro',
    title: 'Lubricentro',
    description: 'Ofrecemos un servicio completo de lubricación para motor, caja y diferencial, además del control y reposición de fluidos. Esto ayuda a prevenir desgastes prematuros y mantiene tu vehículo siempre en óptimas condiciones.',
    imageUrl: 'https://images.unsplash.com/photo-1642075223291-f9ec545889fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'left',
  },
  {
    id: 'alineacion3d',
    title: 'Alineación 3D',
    description: 'Contamos con la última tecnología en alineación 3D para ajustar con precisión los ángulos de las ruedas. Este servicio mejora la estabilidad del vehículo, reduce el desgaste de neumáticos y optimiza el consumo de combustible.',
    imageUrl: 'https://i.imgur.com/pNJC9wT.jpeg',
    imagePosition: 'right',
  },
  {
    id: 'trendelantero',
    title: 'Tren Delantero',
    description: 'Nos especializamos en la reparación y ajuste del tren delantero: rótulas, parrillas, bujes, extremos de dirección y amortiguadores. Un tren delantero en buen estado brinda seguridad, confort y mayor vida útil a tus neumáticos.',
    imageUrl: 'https://images.unsplash.com/photo-1640021042525-5610f9f75444?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'left',
  },
  {
    id: 'enderezadodellantas',
    title: 'Enderezado de Llantas',
    description: 'Reparamos llantas deformadas o golpeadas con herramientas especializadas. Un correcto enderezado mejora el contacto de la rueda con el asfalto, evita vibraciones y alarga la vida de neumáticos y suspensión.',
    imageUrl: 'https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right',
  }
];


export function ServicesPage() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
      <div className="space-y-16">
        {servicesData.map((service) => (
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
  );
}
