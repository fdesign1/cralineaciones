
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { usePageTitle } from "@/hooks/usePageTitle";
import { WeatherWidget } from "@/components/layout/Weather";
import { ServicesGrid } from "@/components/features/services/ServicesGrid";
import { FeaturedGallery } from "@/components/features/gallery/FeaturedGallery";
import { ProductsAndBrands } from "@/components/features/products/ProductsAndBrands";
import { HeroImage } from "@/components/layout/HeroImage";

//import { Insta } from "@/components/features/products/Insta";

export function HomePage() {
  usePageTitle({
    title: "Inicio - Taller Mecánico en Bahía Blanca",
    description: "CR Alineaciones Lubricentro en Bahía Blanca. Especialistas en alineación 3D, cambio de aceite, frenos, balanceo y más servicios automotrices. ¡Agenda tu turno!"
  });


  useEffect(() => {
    // Agregar el script de Elfsight
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Esperar un poco y luego eliminar el elemento no deseado
    const removeUnwantedElement1 = setInterval(() => {
      const unwantedElement1 = document.querySelector(
        "#eapps-google-reviews-8bda86cd-6072-40eb-9e74-4035f030e02b > div > div > div > div.WidgetBackground__ContentContainer-sc-1ho7q3r-1.jUKeJm > div > a"
      );
      if (unwantedElement1) {
        unwantedElement1.remove();
        clearInterval(removeUnwantedElement1); // Detiene el intervalo una vez eliminado
      }
    }, 1000);


    // Eliminar el segundo elemento no deseado
    const removeUnwantedElement2 = setInterval(() => {
      const unwantedElement2 = document.querySelector(
        "[id^='eapps-instagram-feed-'] > a"
      );
      if (unwantedElement2) {
        unwantedElement2.remove();
        clearInterval(removeUnwantedElement2); // Detiene el intervalo una vez eliminado
      }
    }, 1000);


    return () => {
      document.body.removeChild(script);
      clearInterval(removeUnwantedElement1);
      clearInterval(removeUnwantedElement2);
    };
  }, []);
  const { ref, inView } = useInView({
    threshold: 0.5, // trigger the effect when 50% of the image is in the viewport
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "elfsight-app-e64d9b84-7a8d-4ef1-878b-673768e86871";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
  <div className="relative w-full h-[80vh] sm:h-[85vh] md:h-screen overflow-hidden">
  {/* Optimized Hero Image */}
  <HeroImage
    src="https://i.postimg.cc/RF3Yr19C/Copilot-20250915-013847.png"
    alt="CR Alineaciones Lubricentro - Taller Mecánico en Bahía Blanca"
    className="animate-fade-in"
  />

  {/* Contenido centrado */}
  <section className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4 py-8 sm:py-12">
    
    <h1
      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white opacity-0 animate-fade-up"
      style={{ animationDelay: '0.4s' }}
    >
      CR Alineación Lubricentro
    </h1>

    <p
      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl px-4 opacity-0 animate-fade-up"
      style={{ animationDelay: '0.6s' }}
    >
      Su taller de confianza para el cuidado de su automóvil, desde el
      mantenimiento, hasta alineación avanzada de ruedas 3D.
    </p>

    <p
      className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white-300 mb-6 sm:mb-8 px-4 max-w-sm sm:max-w-lg opacity-0 animate-fade-up"
      style={{ animationDelay: '0.8s' }}
    >
      Remedios de Escalada 366, Bahía Blanca | 2914460056
    </p>

    {/* Weather widget */}
    <div className="mb-6 sm:mb-8 px-4 opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
      <WeatherWidget />
    </div>

    {/* Botones */}
    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap px-4 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
      <Button asChild size="default" className="bg-red-700 text-white hover:bg-red-800 text-sm sm:text-base px-4 sm:px-6">
        <Link to="/services">Nuestros Servicios</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="default"
        className="text-white border-white hover:bg-white/10 text-sm sm:text-base px-4 sm:px-6"
      >
        <Link to="/turnos">Solicita tu turno</Link>
      </Button>
    </div>
  </section>
</div>

      {/* Servicios debajo del Hero */}
      <ServicesGrid />

      {/* Galería Destacada */}
      <FeaturedGallery />

      {/* Insta */}
      {/*<Insta />*/}

      {/* Productos y Marcas */}
      <ProductsAndBrands />



    </>
  );
}
