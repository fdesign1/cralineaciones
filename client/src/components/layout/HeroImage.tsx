import * as React from 'react';
import { useState, useEffect } from 'react';

interface HeroImageProps {
  src: string;
  srcWebP?: string;
  srcMobile?: string;
  srcMobileWebP?: string;
  alt: string;
  className?: string;
}

export function HeroImage({ 
  src, 
  srcWebP, 
  srcMobile, 
  srcMobileWebP, 
  alt, 
  className = '' 
}: HeroImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Determine best image source based on device and browser support
    const getOptimalImageSrc = () => {
      // Check WebP support
      const supportsWebP = (() => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      })();

      if (isMobile) {
        if (supportsWebP && srcMobileWebP) return srcMobileWebP;
        if (srcMobile) return srcMobile;
      }
      
      if (supportsWebP && srcWebP) return srcWebP;
      return src;
    };

    // Preload the optimal image
    const optimalSrc = getOptimalImageSrc();
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(optimalSrc);
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      // Fallback to original source on error
      const fallbackImg = new Image();
      fallbackImg.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
      fallbackImg.src = src;
    };
    
    img.src = optimalSrc;
  }, [src, srcWebP, srcMobile, srcMobileWebP, isMobile]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Low quality placeholder while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHN2Zz4K')] opacity-20" />
        </div>
      )}
      
      {/* Main image */}
      {imageSrc && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${imageSrc}')`,
            willChange: 'transform',
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
    </div>
  );
}
