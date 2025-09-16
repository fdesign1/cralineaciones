import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GalleryGrid } from './GalleryGrid';
import { featuredGalleryData } from '@/data/galleryData';
import { Button } from '@/components/ui/button';

export function FeaturedGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La calidad de nuestro trabajo habla por sí sola. Cada vehículo que pasa por nuestro taller 
            recibe la atención y el cuidado que se merece.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid items={featuredGalleryData} showCategories={false} />

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery" className="inline-flex items-center gap-2">
              Ver Galería Completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
