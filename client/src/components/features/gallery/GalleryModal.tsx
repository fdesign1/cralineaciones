import * as React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from './GalleryGrid';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryModalProps {
  item: GalleryItem;
  onClose: () => void;
}

export function GalleryModal({ item, onClose }: GalleryModalProps) {
  const [currentView, setCurrentView] = useState<'before' | 'after' | 'single'>(() => {
    if (item.beforeImage && item.afterImage) return 'before';
    return 'single';
  });

  const isBeforeAfter = !!(item.beforeImage && item.afterImage);
  
  const getCurrentImage = () => {
    if (!isBeforeAfter) return item.image;
    return currentView === 'before' ? item.beforeImage : item.afterImage;
  };

  const toggleView = () => {
    if (!isBeforeAfter) return;
    setCurrentView(currentView === 'before' ? 'after' : 'before');
  };

  // Aplicar estilos específicos para tablet
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 768px) and (max-width: 1024px) {
        .gallery-modal-content {
          max-width: 90vw !important;
          max-height: 85vh !important;
        }
        
        .gallery-modal-image {
          max-height: 60vh !important;
          object-fit: contain !important;
        }
        
        .gallery-modal-image-container {
          padding: 1rem !important;
          max-height: 60vh !important;
        }
      }
      
      @media (max-width: 767px) {
        .gallery-modal-content {
          max-width: 95vw !important;
          max-height: 90vh !important;
        }
        
        .gallery-modal-image {
          max-height: 50vh !important;
        }
        
        .gallery-modal-image-container {
          padding: 0.5rem !important;
          max-height: 50vh !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="gallery-modal-content max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.service}</p>
        </div>

        {/* Image Container */}
        <div className="relative">
          <div className="gallery-modal-image-container aspect-video bg-gray-100 flex items-center justify-center p-4">
            <img
              src={getCurrentImage()}
              alt={`${item.title} - ${currentView === 'before' ? 'Antes' : currentView === 'after' ? 'Después' : ''}`}
              className="gallery-modal-image max-w-full max-h-full object-contain"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto'
              }}
            />
          </div>

          {/* Before/After Toggle */}
          {isBeforeAfter && (
            <>
              <div className="absolute top-4 left-4">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentView === 'before' ? 'Antes' : 'Después'}
                </span>
              </div>
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={toggleView}
                  className="bg-black/70 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                >
                  {currentView === 'before' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <p className="text-gray-700 mb-4">{item.description}</p>
          
          {isBeforeAfter && (
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setCurrentView('before')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'before'
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Ver Antes
              </button>
              <button
                onClick={() => setCurrentView('after')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'after'
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Ver Después
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
