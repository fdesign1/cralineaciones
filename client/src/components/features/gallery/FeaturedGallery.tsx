import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GalleryGrid } from './GalleryGrid';
import { featuredGalleryData } from '@/data/galleryData';
import { Button } from '@/components/ui/button';

export function FeaturedGallery() {
  return (
    <div className="w-full">
      {/* Gallery Grid - Sin márgenes */}
      <GalleryGrid items={featuredGalleryData} showCategories={false} />

      {/* Call to Action */}
      <div className="text-center mt-12 px-4">
        <Button asChild variant="outline" size="lg">
          <Link to="/gallery" className="inline-flex items-center gap-2">
            Ver Galería Completa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
