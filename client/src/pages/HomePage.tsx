import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServicesGrid } from "@/components/features/services/ServicesGrid";

export function HomePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Taller de Alineación y Balanceo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Su taller de confianza para el cuidado de su automóvil, desde el
            mantenimiento, hasta alineación avanzada de ruedas 3D.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/services">Nuestros Servicios</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Programa una cita</Link>
            </Button>
          </div>
        </section>
      </div>
      <ServicesGrid />
    </>
  );
}
