import { useState, useEffect } from 'react';

interface UseImageProxyOptions {
  fallbackImage?: string;
  enableProxy?: boolean;
}

export function useImageProxy(originalUrl: string, options: UseImageProxyOptions = {}) {
  const [imageUrl, setImageUrl] = useState(originalUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { fallbackImage, enableProxy = true } = options;

  useEffect(() => {
    if (!originalUrl) {
      setIsLoading(false);
      return;
    }

    // Si no es una URL externa, usar directamente
    if (!originalUrl.startsWith('http')) {
      setImageUrl(originalUrl);
      setIsLoading(false);
      return;
    }

    // Si el proxy está deshabilitado, usar URL original
    if (!enableProxy) {
      setImageUrl(originalUrl);
      setIsLoading(false);
      return;
    }

    // Usar proxy para URLs externas
    const proxyUrl = `/.netlify/functions/image-proxy?url=${encodeURIComponent(originalUrl)}`;
    
    // Preload la imagen para verificar si carga correctamente
    const img = new Image();
    
    img.onload = () => {
      setImageUrl(proxyUrl);
      setIsLoading(false);
      setHasError(false);
    };
    
    img.onerror = () => {
      // Si el proxy falla, intentar con la URL original
      const fallbackImg = new Image();
      
      fallbackImg.onload = () => {
        setImageUrl(originalUrl);
        setIsLoading(false);
        setHasError(false);
      };
      
      fallbackImg.onerror = () => {
        // Si ambas fallan, usar imagen de fallback
        setImageUrl(fallbackImage || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="Arial" font-size="16"%3EImagen no disponible%3C/text%3E%3C/svg%3E');
        setIsLoading(false);
        setHasError(true);
      };
      
      fallbackImg.src = originalUrl;
    };
    
    img.src = proxyUrl;
  }, [originalUrl, enableProxy, fallbackImage]);

  return {
    imageUrl,
    isLoading,
    hasError,
    retry: () => {
      setIsLoading(true);
      setHasError(false);
      // Re-ejecutar el efecto
      setImageUrl(originalUrl);
    }
  };
}
