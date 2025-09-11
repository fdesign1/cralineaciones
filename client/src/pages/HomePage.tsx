
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServicesGrid } from "@/components/features/services/ServicesGrid";
import { ProductsAndBrands } from "@/components/features/products/ProductsAndBrands";

//import { Insta } from "@/components/features/products/Insta";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-screen bg-[url('https://boyceautorepair.com/wp-content/uploads/2024/03/BOY-Blog-header_What-Is-Wheel-Alignment__3-24.png')] bg-cover bg-center relative overflow-hidden">
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Contenido centrado */}
        <section className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white max-w-4xl">
            CR Alineación Lubricentro
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl px-4">
            Su taller de confianza para el cuidado de su automóvil, desde el
            mantenimiento, hasta alineación avanzada de ruedas 3D.
          </p>
          {/* Dirección/Domicilio */}
          <p className="text-sm sm:text-md md:text-lg font-bold text-white-300 mb-8 px-4 max-w-lg">
            Remedios de Escalada 366, Bahía Blanca | 291 446-0056
          </p>
          <div className="flex justify-center gap-4 flex-wrap px-4">
            <Button asChild size="lg" className="bg-red-700 text-white hover:bg-red-800">
              <Link to="/services">Nuestros Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              <Link to="/contact">Solicita tu turno</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Servicios debajo del Hero */}
      <ServicesGrid />


      {/* Insta */}
      {/* <Insta /> */}

      {/* Productos y Marcas */}
      <ProductsAndBrands />

      

    </>
  );
}
