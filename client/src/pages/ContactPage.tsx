
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Map */}
      <div className="w-full h-[300px] md:h-[400px]">
        <iframe
          title="Workshop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4585442593675!2d-62.24657642402484!3d-38.730238571760324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda312c15fc1cd%3A0x50b1cf900bcdcd5d!2sCR%20ALINEACIONES%20LUBRICENTRO!5e0!3m2!1ses-419!2spl!4v1757412059597!5m2!1ses-419!2spl"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Description */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tu Taller de Confianza en Bahía Blanca
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                En CR Alineaciones Lubricentro, nos dedicamos al cuidado integral de tu vehículo. Con años de experiencia y un equipo de profesionales apasionados, ofrecemos servicios de alta calidad para garantizar tu seguridad y el óptimo rendimiento de tu auto.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Utilizamos tecnología de punta, como nuestra alineadora 3D, y trabajamos con las mejores marcas del mercado para asegurarte un servicio confiable y duradero. Tu tranquilidad es nuestra prioridad.
              </p>
              <Button asChild size="lg" className="bg-red-700 text-white hover:bg-red-800">
                <a href="https://wa.me/+5492914460056" target="_blank" rel="noopener noreferrer">
                  Solicitá tu Turno
                </a>
              </Button>
            </div>

            {/* Right Column: Image */}
            <div data-aos="fade-left">
              <img
                src="https://i.imgur.com/pNJC9wT.jpeg"
                alt="Taller CR Alineaciones"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section Placeholder */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Qué dicen nuestros clientes</h2>
          <p className="text-muted-foreground mb-8">
            Las opiniones de nuestros clientes estarán disponibles próximamente.
          </p>
          {/* Placeholder for Google Reviews widget */}
          <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-md">
            <p className="text-muted-foreground italic">Google Reviews se mostrarán aquí.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
