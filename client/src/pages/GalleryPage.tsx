import * as React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import { GalleryGrid } from '@/components/features/gallery/GalleryGrid';
import { galleryData } from '@/data/galleryData';

export function GalleryPage() {
  usePageTitle({
    title: "Galería de Trabajos - Nuestros Mejores Resultados",
    description: "Galería de trabajos realizados en CR Alineaciones Lubricentro. Ve la calidad de nuestros servicios: alineación 3D, frenos, suspensión y más. Antes y después de nuestros trabajos."
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Galería de Trabajos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conocé la calidad de nuestro trabajo a través de estos ejemplos reales. 
          Cada imagen cuenta la historia de un vehículo que recuperó su mejor rendimiento.
        </p>
      </div>

      {/* Stats */}
     {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-red-700 mb-2">300+</div>
          <div className="text-sm text-muted-foreground">Trabajos Realizados</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-700 mb-2">10+</div>
          <div className="text-sm text-muted-foreground">Años de Experiencia</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-700 mb-2">100%</div>
          <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-700 mb-2">24h</div>
          <div className="text-sm text-muted-foreground">Tiempo de Respuesta</div>
        </div>
      </div>*/}

      {/* Gallery Grid */}
      <GalleryGrid items={galleryData} showCategories={true} />

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-black-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          ¿Tu Auto Necesita Atención?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          No esperes a que el problema empeore. Agenda tu turno y dale a tu vehículo el cuidado que se merece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/turnos"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white font-medium rounded-lg hover:bg-red-800 transition-colors"
          >
            Solicitar Turno
          </Link>
          <a
            href="https://wa.me/+5492914460056"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-red-700 text-red-700 font-medium rounded-lg hover:bg-red-50 transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
