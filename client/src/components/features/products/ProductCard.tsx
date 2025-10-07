
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useImageProxy } from '@/hooks/useImageProxy';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  category?: string;
}

export function ProductCard({ name, description, imageUrl, href, category }: ProductCardProps) {
  const { imageUrl: proxyImageUrl, isLoading, hasError } = useImageProxy(imageUrl, {
    enableProxy: true
  });

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:shadow-lg transition-shadow duration-300 rounded-xl h-full">
      <Card className="overflow-hidden h-full bg-gray-800">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 bg-gray-700 flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={proxyImageUrl}
              alt={name}
              className={`w-full h-48 object-contain transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='200'%3E%3Crect width='600' height='200' fill='%23272a30'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='16'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-lg font-bold mb-2 text-white">{name}</CardTitle>
          {category && (
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-300">
                {category}
              </span>
            </div>
          )}
          <p className="text-sm text-gray-200">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}
