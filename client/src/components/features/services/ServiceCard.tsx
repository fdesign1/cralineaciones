
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  href: string;
  className?: string;
  overlay?: string;
  aosEffect?: string;
}

export function ServiceCard({
  title,
  imageUrl,
  href,
  className,
  overlay = "bg-black/50",
  aosEffect = "fade-up",
}: ServiceCardProps) {
  return (
    <div 
      className={cn('group relative overflow-hidden', className)}
      data-aos={aosEffect}
    >
      {/* Imagen de fondo */}
      <div
        className="h-96 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay dinámico */}
      <div className={`absolute inset-0 ${overlay} transition-opacity duration-300 group-hover:opacity-70`} />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        <Button
          asChild
          variant="outline"
          className="bg-transparent text-white border-white group-hover:bg-white group-hover:text-black transition-all duration-300 z-10"
        >
          <Link to={href}>
            Ver más <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
