import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { usePageTitle } from "@/hooks/usePageTitle";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { WeatherWidget } from "@/components/layout/Weather";
import { ServicesGrid } from "@/components/features/services/ServicesGrid";
import { FeaturedGallery } from "@/components/features/gallery/FeaturedGallery";
import { ProductsAndBrands } from "@/components/features/products/ProductsAndBrands";
import { HeroCarousel } from "@/components/layout/HeroCarousel";

export function HomePage() {
  usePageTitle({
    title: "Inicio",
    description: "CR Alineaciones Lubricentro - Taller mecánico especializado en alineación 3D, balanceo, cambio de aceite y servicios del automotor en Bahía Blanca. Atención personalizada.",
    keywords: "alineación Bahía Blanca, lubricentro Bahía Blanca, taller mecánico Bahía Blanca, balanceo ruedas, cambio aceite, alineación 3D, suspensión, frenos, embragues, CR Alineaciones",
    canonicalUrl: "https://cralineaciones.com"
  });

  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <LocalBusinessSchema />
      {/* Hero Carousel - Absolute positioned */}
      <HeroCarousel />
      
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        {/* Content below carousel */}
        <div className="relative z-10 mt-[100vh] bg-black">

        {/* Services Section */}
        <section className="pt-20 pb-0 bg-gradient-to-r from-black-700 to-black-900" ref={ref1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios del automotor y atención profesional en Bahía Blanca.
            </p>
          </motion.div>
          <ServicesGrid />
        </section>

        {/* Gallery Section - Improved Spacing */}
        <section className="pt-8 pb-16 md:pb-24 bg-gradient-to-br from-gray-900 via-black to-gray-900" ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Nuestro Taller
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Conoce nuestras instalaciones y el equipo de trabajo que hace posible brindarte el mejor servicio.
            </p>
          </motion.div>
          <div className="w-full">
            <FeaturedGallery />
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gradient-to-r from-black-700 to-black-900" ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Productos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trabajamos con las mejores marcas del mercado!
            </p>
          </motion.div>
          <ProductsAndBrands />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black" ref={ref4}>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para cuidar tu vehículo?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy mismo y agenda tu turno. Nuestro equipo está listo para atenderte.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/turnos">
                  <Button size="lg" className="bg-red-700 text-white hover:bg-red-800">
                    Solicitar Turno
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                    Contactar
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}