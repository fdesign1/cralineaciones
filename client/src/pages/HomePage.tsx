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
import mainImage from "@/assets/main.png";

export function HomePage() {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  usePageTitle({
    title: "Inicio",
    description: "CR Alineaciones Lubricentro - Taller mecánico especializado en alineación 3D, balanceo, cambio de aceite y servicios del automotor en Bahía Blanca. Atención personalizada.",
    keywords: "alineación Bahía Blanca, lubricentro Bahía Blanca, taller mecánico Bahía Blanca, balanceo ruedas, cambio aceite, alineación 3D, suspensión, frenos, embragues, CR Alineaciones",
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

  // Pre-cargar la imagen para mejor rendimiento
  useEffect(() => {
    const img = new Image();
    img.src = mainImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [mainImage]);

  // Aplicar estilos responsive para la imagen de fondo
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .hero-background {
          background-attachment: scroll !important;
          background-size: cover !important;
          background-position: center center !important;
          min-height: 100vh !important;
          max-height: 100vh !important;
          overflow: hidden !important;
        }
      }
      
      @media (max-width: 480px) {
        .hero-background {
          background-size: cover !important;
          background-position: center center !important;
          min-height: 100vh !important;
          max-height: 100vh !important;
        }
      }
      
      @media (min-width: 768px) and (max-height: 900px) {
        .hero-background {
          background-attachment: fixed !important;
        }
      }
      
      /* Mejora para el fade-in suave */
      .hero-background {
        will-change: opacity;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center w-full">
          {/* Imagen de fondo con blur delicado y efecto fade-in */}
          <motion.div
            className="absolute inset-0 w-full h-full hero-background"
            style={{
              backgroundImage: imageLoaded ? `url(${mainImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              filter: 'blur(1px)',
              minHeight: '100vh',
              width: '100%',
              maxWidth: '100vw'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.4, 0.0, 0.2, 1],
              delay: imageLoaded ? 0.2 : 0
            }}
          />
          
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Decorative elements - Puntos azules que laten */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
          </div>
          
          <div className="relative container mx-auto px-4 w-full">
            <div className="text-center space-y-8" ref={ref}>
              {/* Título - Aparece primero */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  CR Alineaciones
                  <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Lubricentro
                  </span>
                </h1>
              </motion.div>

              {/* Subtítulo - Aparece segundo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Tu taller de confianza en Bahía Blanca. Especialistas en alineación 3D, 
                  balanceo, cambio de aceite y servicios del automotor.
                </p>
              </motion.div>

              {/* Clima - Aparece tercero */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                className="pt-8 flex justify-center"
              >
                <WeatherWidget />
              </motion.div>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-20 bg-gradient-to-r from-black-700 to-black-900" ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

        {/* Gallery Section - Full Width */}
        <section className="py-20 bg-gradient-to-r from-black-700 to-black-900" ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestro Taller
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conoce nuestras instalaciones y el equipo de trabajo que hace posible brindarte el mejor servicio.
            </p>
          </motion.div>
          <div className="w-full">
            <FeaturedGallery />
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-r from-black-700 to-black-900" ref={ref4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
        <section className="py-20 bg-black" ref={ref5}>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
    </>
  );
}