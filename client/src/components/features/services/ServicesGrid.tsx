
import * as React from 'react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Professional Detailing',
    imageUrl: '/assets/detailing.jpg',
    href: '/services/detailing',
    gridClass: 'md:col-span-2',
  },
  {
    title: 'Auto Spa Zone',
    imageUrl: '/assets/auto-spa.jpg',
    href: '/services/auto-spa',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'Vehicle Inspection',
    imageUrl: '/assets/inspection.jpg',
    href: '/services/inspection',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'Vehicle Mechanics',
    imageUrl: '/assets/mechanics.jpg',
    href: '/services/mechanics',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'Suspension Geometry',
    imageUrl: '/assets/alignment.jpg',
    href: '/services/3d-alignment',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'Tire Service',
    imageUrl: '/assets/tires.jpg',
    href: '/services/wheel-alignment',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'Air Conditioning',
    imageUrl: '/assets/ac.jpg',
    href: '/services/ac-service',
    gridClass: 'md:col-span-2',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageUrl={service.imageUrl}
              href={service.href}
              className={service.gridClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
