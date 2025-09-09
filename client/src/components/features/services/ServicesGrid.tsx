
import * as React from "react";
import { ServiceCard } from "./ServiceCard";



const services = [
  {
    title: "Cambio de Aceite",
    imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services#aceite",
    gridClass: "md:col-span-2",
    overlay: "bg-black/80"
  },
  {
    title: "Frenos",
    imageUrl: "https://images.unsplash.com/photo-1613214150384-14921ff659b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJha2VzJTIwY2FyfGVufDB8fDB8fHwy",
    href: "/services#frenos",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Balanceo Computado",
    imageUrl: "https://i.imgur.com/pNJC9wT.jpeg",
    href: "/services#balanceo",
    gridClass: "md:col-span-1",
    overlay: "bg-black/60"
  },
  {
    title: "Lubricentro",
    imageUrl: "https://images.unsplash.com/photo-1642075223291-f9ec545889fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services#lubricentro",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Alineación 3D",
    imageUrl: "https://i.imgur.com/pNJC9wT.jpeg",
    href: "/services#alineacion3d",
    gridClass: "md:col-span-1",
    overlay: "bg-black/60"
  },
  {
    title: "Tren Delantero",
    imageUrl: "https://images.unsplash.com/photo-1640021042525-5610f9f75444?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services#trendelantero",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Enderezado de Llantas",
    imageUrl: "https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services#enderezadodellantas",
    gridClass: "md:col-span-2",
    overlay: "bg-black/60"
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
            overlay={service.overlay}

          />
        ))}
      </div>
    </section>
  );
}
