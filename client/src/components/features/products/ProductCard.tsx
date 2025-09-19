
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  category?: string;
}

export function ProductCard({ name, description, imageUrl, href, category }: ProductCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:shadow-lg transition-shadow duration-300 rounded-xl h-full">
      <Card className="overflow-hidden h-full bg-gray-800">
        <CardHeader className="p-0">
          <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
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
