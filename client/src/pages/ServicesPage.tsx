
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceSection } from '@/components/features/services/ServiceSection';

const servicesData = [
  {
    id: 'oil-service',
    title: 'Oil Service',
    description: 'Regular oil changes are crucial for engine health. We use high-quality synthetic and conventional oils to keep your engine running smoothly and extend its life.',
    imageUrl: '/assets/oil-service.jpg',
    imagePosition: 'right',
  },
  {
    id: 'brakes',
    title: 'Brakes',
    description: 'From brake pad replacement to rotor resurfacing, our experts ensure your braking system is responsive and safe. We perform thorough inspections to catch any potential issues.',
    imageUrl: '/assets/brakes.jpg',
    imagePosition: 'left',
  },
  {
    id: 'suspension',
    title: 'Suspension',
    description: 'A healthy suspension system provides a comfortable ride and stable handling. We diagnose and repair all suspension components, including shocks, struts, and control arms.',
    imageUrl: '/assets/suspension.jpg',
    imagePosition: 'right',
  },
  {
    id: '3d-alignment',
    title: '3D Alignment',
    description: 'Using state-of-the-art 3D imaging technology, we provide the most precise wheel alignment available. This ensures optimal tire wear, fuel efficiency, and vehicle handling.',
    imageUrl: '/assets/alignment.jpg',
    imagePosition: 'left',
  },
  {
    id: 'wheel-alignment',
    title: 'Wheel Alignment',
    description: 'Proper wheel alignment is key to your safety and your car\'s performance. Our technicians adjust the angles of your wheels to manufacturer specifications for a smoother ride.',
    imageUrl: '/assets/tires.jpg',
    imagePosition: 'right',
  },
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
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
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
