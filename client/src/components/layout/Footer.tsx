import * as React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Shop Details */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              CR Alineaciones Lubricentro
            </h3>
            <p className="text-sm text-muted-foreground">
              Remedios de Escalada 366
              <br />
              Bahía Blanca, B8000
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Teléfono: +54 9 291 446-0056
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Email: contacto@cralineaciones.com
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Column 2: Schedule */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horario</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Lunes-Viernes: 8:00 AM - 17:00 PM</li>
              <li>Sábados: 8:00 AM - 13:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nuestra ubicación</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
   <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4585442593675!2d-62.24657642402484!3d-38.730238571760324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda312c15fc1cd%3A0x50b1cf900bcdcd5d!2sCR%20ALINEACIONES%20LUBRICENTRO!5e0!3m2!1ses-419!2spl!4v1757430983622!5m2!1ses-419!2spl"
      width="600"
      height="200"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación CR Alineaciones"
    />            </div>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CR alineaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
