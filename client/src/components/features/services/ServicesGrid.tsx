
import * as React from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Cambio de Aceite",
    imageUrl: "/assets/detailing.jpg",
    href: "/services#detailing", // Example, assuming this service will be added later
    gridClass: "md:col-span-2",
  },
  {
    title: "Frenos",
    imageUrl: "/assets/auto-spa.jpg",
    href: "/services#auto-spa", // Example, assuming this service will be added later
    gridClass: "md:col-span-1",
  },
  {
    title: "Balanceo Computado",
    imageUrl: "/assets/inspection.jpg",
    href: "/services#inspection", // Example, assuming this service will be added later
    gridClass: "md:col-span-1",
  },
  {
    title: "Lubricentro",
    imageUrl: "/assets/mechanics.jpg",
    href: "/services#mechanics", // Example, assuming this service will be added later
    gridClass: "md:col-span-1",
  },
  {
    title: "Alineación 3D",
    imageUrl: "/assets/alignment.jpg",
    href: "/services#3d-alignment",
    gridClass: "md:col-span-1",
  },
  {
    title: "Tren Delantero",
    imageUrl: "/assets/tires.jpg",
    href: "/services#wheel-alignment",
    gridClass: "md:col-span-1",
  },
  {
    title: "Enderezado de Llantas",
    imageUrl: "/assets/ac.jpg",
    href: "/services#ac-service", // Example, assuming this service will be added later
    gridClass: "md:col-span-2",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
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
    </section>
  );
}
