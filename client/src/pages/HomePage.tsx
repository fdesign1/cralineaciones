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
import { HeroImage } from "@/components/layout/HeroImage";

export function HomePage() {
  usePageTitle({
    title: "Inicio",
    description: "CR Alineaciones Lubricentro - Taller mecánico especializado en alineación 3D, balanceo, cambio de aceite y servicios automotrices en Bahía Blanca. Tecnología de última generación y atención personalizada.",
    keywords: "alineación Bahía Blanca, lubricentro Bahía Blanca, taller mecánico Bahía Blanca, balanceo ruedas, cambio aceite, alineación 3D, suspensión, frenos, CR Alineaciones",
    canonicalUrl: "https://cralineaciones.com"
  });

  const [ref, inView] = useInView({
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

  const [ref5, inView5] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref6, inView6] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref7, inView7] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500" />
          </div>
          
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center space-y-8" ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  CR Alineaciones
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Lubricentro
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
                  Tu taller de confianza en Bahía Blanca. Especialistas en alineación 3D, 
                  balanceo, cambio de aceite y servicios automotrices con tecnología de última generación.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-lg font-medium">Alineación 3D</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-lg font-medium">Tecnología Avanzada</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-lg font-medium">Atención Personalizada</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Image and Weather Section */}
        <section className="py-20 bg-black" ref={ref2}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 lg:order-1"
              >
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  <HeroImage 
                    src="https://i.postimg.cc/4xD7bsd8/b2db1a88-a17a-4de9-80ef-e08cb81923b5.jpg"
                    alt="CR Alineaciones Lubricentro - Taller mecánico en Bahía Blanca"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                        Tecnología de Vanguardia
                      </h2>
                      <p className="text-lg lg:text-xl text-gray-200 max-w-2xl">
                        Equipos de última generación para el cuidado perfecto de tu vehículo
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Weather Widget */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-1 lg:order-2"
              >
                <WeatherWidget />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900" ref={ref3}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ofrecemos una amplia gama de servicios automotrices con la mejor tecnología 
                y atención profesional en Bahía Blanca.
              </p>
            </motion.div>
            <ServicesGrid />
          </div>
        </section>

        {/* Gallery Section - Full Width */}
        <section className="py-20 bg-black" ref={ref4}>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16 px-4"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nuestro Taller
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conoce nuestras instalaciones y el equipo de trabajo que hace posible 
                brindarte el mejor servicio automotriz.
              </p>
            </motion.div>
            <FeaturedGallery />
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900" ref={ref5}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Productos y Marcas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trabajamos con las mejores marcas del mercado para garantizar 
                la calidad y durabilidad de nuestros servicios.
              </p>
            </motion.div>
            <ProductsAndBrands />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black" ref={ref6}>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para cuidar tu vehículo?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy mismo y agenda tu turno. Nuestro equipo está listo para atenderte 
                con la mejor tecnología y servicio profesional.
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
    </>
  );
}