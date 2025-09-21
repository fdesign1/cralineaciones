
import * as React from "react";
import { ServiceCard } from "./ServiceCard";
import Suspension2 from '@/assets/suspension2.png';
import Rims2 from '@/assets/rims.png';
import Balanceo3 from '@/assets/balanceo3.png';
import Alineacion3 from '@/assets/alineacion3.png';
import Battery2 from '@/assets/battery2.png';

const services = [
  {
    title: "Cambio de Aceite",
    imageUrl: "https://cdn11.bigcommerce.com/s-oqiq1jbcnv/images/stencil/1280x1280/products/758886/4175256/pouring-motor-oil-into-engine__69564.1657653013.jpg?c=1",
    href: "/services#aceite",
    gridClass: "md:col-span-1",
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
    title: "Balanceo",
    imageUrl: Balanceo3,
    href: "/services#balanceo",
    gridClass: "md:col-span-1",
    overlay: "bg-black/80"
  },
  {
    title: "Lubricentro",
    imageUrl: "https://neumarep.cl/wp-content/uploads/2025/03/Lubricentro.webp",
    href: "/services#lubricentro",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Alineación 3D",
    imageUrl: Alineacion3,
    href: "/services#alineacion3d",
    gridClass: "md:col-span-1",
    overlay: "bg-black/80"
  },
   {
    title: "Embragues",
    imageUrl: "https://salamancachile.cl/wp-content/uploads/2024/04/cesta-disco-mecanismo-embrague-automotriz-cojinete-auto-sobre-fondo-negro.jpg",
    href: "/services#embragues",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Distribución",
    imageUrl: "https://st4.depositphotos.com/23262978/40261/i/450/depositphotos_402616618-stock-photo-new-timing-belt-with-rollers.jpg",
    href: "/services#distribucion",
    gridClass: "md:col-span-1",
    overlay: "bg-black/60"
  },
  {
    title: "Tren Delantero",
    imageUrl: "https://paautos.gt/inicio/wp-content/uploads/2021/06/05.-Tren-delantero.jpg",
    href: "/services#trendelantero",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Suspensión",
    imageUrl: Suspension2,
    href: "/services#suspension",
    gridClass: "md:col-span-1",
    overlay: "bg-black/80"
  },
  {
    title: "Baterías",
    imageUrl: Battery2,
    href: "/services#baterias",
    gridClass: "md:col-span-1",
    overlay: "bg-red-900/70"
  },
  {
    title: "Enderezado de Llantas",
    imageUrl: Rims2,
    href: "/services#enderezadodellantas",
    gridClass: "md:col-span-1",
    overlay: "bg-black/80"
  },
];

export function ServicesGrid() {
  return (
    <div className="w-full">
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
    </div>
  );
}
