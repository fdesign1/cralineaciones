import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, X } from 'lucide-react';
import { featuredGalleryData } from '@/data/galleryData';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { GalleryItem } from './GalleryGrid';

export function FeaturedGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full">
      {/* Modern Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredGalleryData.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card group relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white p-4">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Ver detalles</p>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {item.service}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/gallery" className="inline-flex items-center gap-3">
              <Eye className="w-5 h-5" />
              Ver Galería Completa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Modal for item details */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-square">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {selectedItem.service}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                  >
                    <Link to="/gallery" className="inline-flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Ver Galería Completa
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <Link to="/turnos" className="inline-flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Solicitar Turno
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
