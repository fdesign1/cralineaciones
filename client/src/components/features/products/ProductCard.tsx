
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export function ProductCard({ name, description, imageUrl }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-lg font-bold mb-2">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
