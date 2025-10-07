import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { WeatherWidget } from './Weather';
import MainImage from '@/assets/dylan.jpg';
import Tyre from '@/assets/tyre.jpg';
import Servicio from '@/assets/servicio.jpg';
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "CR Alineaciones",
    subtitle: "Lubricentro",
    description: "Tu taller de confianza en Bahía Blanca. Especialistas en alineación 3D, balanceo, cambio de aceite y servicios del automotor.",
    buttonText: "Conocer Más",
    buttonLink: "/contact",
    backgroundImage: Servicio,
    gradient: "from-red-400 to-red-600"
  },
  {
    id: 2,
    title: "Nuestros",
    subtitle: "Servicios",
    description: "Alineación 3D, balanceo, cambio de aceite, sistema de frenos, suspensión y más. Tecnología de punta para tu vehículo.",
    buttonText: "Ver Servicios",
    buttonLink: "/services",
    backgroundImage: MainImage,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    title: "Lubricentro",
    subtitle: "Especializado",
    description: "Aceites de las mejores marcas, filtros, lubricantes y productos de mantenimiento. Calidad garantizada para tu auto.",
    buttonText: "Ver Catálogo",
    buttonLink: "/products",
    backgroundImage: Tyre,
    gradient: "from-green-400 to-green-600"
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Load first slide ASAP for better LCP, then preload the rest in the background
  useEffect(() => {
    let isMounted = true;
    const first = new Image();
    first.src = slides[0].backgroundImage;
    // Prefer decode() when available for non-blocking decode
    // Fallback to onload/onerror
    const markLoaded = () => {
      if (isMounted) setImageLoaded(true);
    };
    if (typeof (first as any).decode === 'function') {
      (first as any).decode().then(markLoaded).catch(markLoaded);
    } else {
      first.onload = markLoaded;
      first.onerror = markLoaded;
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!imageLoaded) return;
    // Preload remaining slides once the first is ready
    slides.slice(1).forEach((slide) => {
      const img = new Image();
      img.src = slide.backgroundImage;
    });
  }, [imageLoaded]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center w-full">
      {/* Fallback background while first image loads */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 to-black" />
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(1px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: imageLoaded && index === currentSlide ? 1 : 0,
              scale: imageLoaded && index === currentSlide ? 1 : 1.02
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

       {/* Content */}
       <div className="relative container mx-auto px-4 w-full">
         <div className="text-center space-y-4 md:space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                 {slides[currentSlide].title}
                 <span className={`block bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}>
                   {slides[currentSlide].subtitle}
                 </span>
               </h1>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                 {slides[currentSlide].description}
               </p>
            </motion.div>
          </AnimatePresence>

           {/* Weather Widget - Only show on first slide */}
           {currentSlide === 0 && (
             <motion.div
               initial={{ opacity: 0, y: 20, scale: 0.9 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
               className="pt-4 md:pt-8 flex justify-center"
             >
               <WeatherWidget />
             </motion.div>
           )}

           {/* CTA Button - Only show on slides 1 and 2 (not on main.png slide) */}
           {currentSlide !== 0 && (
             <AnimatePresence mode="wait">
               <motion.div
                 key={`btn-${currentSlide}`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                 className="pt-8"
               >
                 {currentSlide === 2 ? (
                   <a href="#products">
                     <Button 
                       size="lg" 
                       className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-bold`}
                     >
                       {slides[currentSlide].buttonText}
                     </Button>
                   </a>
                 ) : (
                   <Link to={slides[currentSlide].buttonLink}>
                     <Button 
                       size="lg" 
                       className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-bold`}
                     >
                       {slides[currentSlide].buttonText}
                     </Button>
                   </Link>
                 )}
               </motion.div>
             </AnimatePresence>
           )}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
