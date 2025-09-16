import * as React from 'react';
import { GalleryItem } from './GalleryGrid';
import { Card, CardContent } from '@/components/ui/card';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const displayImage = item.beforeImage || item.image || item.afterImage;
  const isBeforeAfter = !!(item.beforeImage && item.afterImage);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          {!imageError && displayImage ? (
            <>
              <img
                src={displayImage}
                alt={item.title}
                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700"></div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Imagen no disponible</p>
              </div>
            </div>
          )}
          
          {/* Overlay con información */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white w-full">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-2">{item.service}</p>
              {isBeforeAfter && (
                <span className="inline-block bg-red-700 text-white text-xs px-2 py-1 rounded-full">
                  Antes/Después
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
