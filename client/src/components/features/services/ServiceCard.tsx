
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
}

export function ServiceCard({ title, imageUrl, href, className }: ServiceCardProps) {
  return (
    <div className={cn('group relative overflow-hidden', className)}>
      <Link to={href} className="absolute inset-0 z-10">
        <span className="sr-only">View {title}</span>
      </Link>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        <Button variant="outline" className="bg-transparent text-white border-white group-hover:bg-white group-hover:text-black transition-colors">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
