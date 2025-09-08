
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Precision Car Service & Alignment
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your trusted partner for expert automotive care, from routine maintenance to advanced 3D wheel alignment.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
