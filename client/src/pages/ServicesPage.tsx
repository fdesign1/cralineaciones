import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceSection } from '@/components/features/services/ServiceSection';

const servicesData = [
  {
    id: 'oil-service',
    title: 'Cambio de Aceite',
    description: 'Los cambios regulares de aceite son cruciales para la salud del motor. Usamos aceites sintéticos y convencionales de alta calidad para mantener tu motor funcionando de manera óptima y prolongar su vida útil.',
    imageUrl: '/assets/oil-service.jpg',
    imagePosition: 'right',
  },
  {
    id: 'brakes',
    title: 'Frenos',
    description: 'Desde el reemplazo de pastillas hasta el rectificado de discos, nuestros expertos aseguran que tu sistema de frenos sea seguro y responsivo. Realizamos inspecciones exhaustivas para detectar cualquier posible problema.',
    imageUrl: '/assets/brakes.jpg',
    imagePosition: 'left',
  },
  {
    id: 'Suspension',
    title: 'Suspensión',
    description: 'Un sistema de suspensión en buen estado garantiza una conducción cómoda y un manejo estable. Diagnosticamos y reparamos todos los componentes de la suspensión, incluyendo amortiguadores, struts y brazos de control.',
    imageUrl: '/assets/suspension.jpg',
    imagePosition: 'right',
  },
  {
    id: '3d-alignment',
    title: 'Alineación 3D',
    description: 'Con tecnología avanzada de imágenes 3D, ofrecemos la alineación de ruedas más precisa disponible. Esto asegura un desgaste óptimo de los neumáticos, mejor eficiencia de combustible y mayor estabilidad en la conducción.',
    imageUrl: '/assets/alignment.jpg',
    imagePosition: 'left',
  },
  {
    id: 'wheel-alignment',
    title: 'Alineación de Ruedas',
    description: 'La alineación adecuada de las ruedas es clave para tu seguridad y el rendimiento de tu vehículo. Nuestros técnicos ajustan los ángulos de las ruedas según las especificaciones del fabricante para una conducción más suave.',
    imageUrl: '/assets/tires.jpg',
    imagePosition: 'right',
  },
  {
    id: '3d-alignment',
    title: 'Alineación 3D',
    description: 'Con tecnología avanzada de imágenes 3D, ofrecemos la alineación de ruedas más precisa disponible. Esto asegura un desgaste óptimo de los neumáticos, mejor eficiencia de combustible y mayor estabilidad en la conducción.',
    imageUrl: '/assets/alignment.jpg',
    imagePosition: 'left',
  },
  {
    id: 'wheel-alignment',
    title: 'Alineación de Ruedas',
    description: 'La alineación adecuada de las ruedas es clave para tu seguridad y el rendimiento de tu vehículo. Nuestros técnicos ajustan los ángulos de las ruedas según las especificaciones del fabricante para una conducción más suave.',
    imageUrl: '/assets/tires.jpg',
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
