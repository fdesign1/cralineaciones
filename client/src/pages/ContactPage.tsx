
import React, { useEffect, useState  } from "react";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";

export function ContactPage() {
  usePageTitle({
    title: "Contacto y Ubicación - Bahía Blanca,
    description: "Contacta con CR Alineaciones Lubricentro. Ubicados en Remedios de Escalada 366, Bahía Blanca. Tel: 291 446-0056. ¡Solicita tu turno!"
  });
  const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
    // Agregar el script de Elfsight
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Esperar un poco y luego eliminar el elemento no deseado
      const removeUnwantedElement1 = setInterval(() => {
        const unwantedElement1 = document.querySelector(
          "#eapps-google-reviews-a46fb02c-b085-4cf7-8d60-e8198947b057 > div > div > div > div.WidgetBackground__Content-sc-e38729c4-2.fyDWqT > div > a"
        );
        if (unwantedElement1) {
          unwantedElement1.remove();
          clearInterval(removeUnwantedElement1); // Detiene el intervalo una vez eliminado
        }
      }, 1000);


     // Eliminar el segundo elemento no deseado
     const removeUnwantedElement2 = setInterval(() => {
      const unwantedElement2 = document.querySelector(
        "[id^='eapps-instagram-feed-'] > a"
      );
      if (unwantedElement2) {
        unwantedElement2.remove();
        clearInterval(removeUnwantedElement2); // Detiene el intervalo una vez eliminado
      }
    }, 1000);


    return () => {
      document.body.removeChild(script);
      clearInterval(removeUnwantedElement1);
      clearInterval(removeUnwantedElement2);
    };
  }, []);
 

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
     <div className="flex flex-col">
      {/* Banner Map.*/}
      <div
        className={`w-full h-[300px] md:h-[400px] transition-opacity duration-1000 ease-out ${
          iframeLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          title="Workshop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4585442593675!2d-62.24657642402484!3d-38.730238571760324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda312c15fc1cd%3A0x50b1cf900bcdcd5d!2sCR%20ALINEACIONES%20LUBRICENTRO!5e0!3m2!1ses-419!2spl!4v1757412059597!5m2!1ses-419!2spl"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIframeLoaded(true)}
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
                <Link to="/turnos">
                  Solicitá tu Turno
                </Link>
              </Button>
            </div>

            {/* Right Column: Image */}
            <div data-aos="fade-left">
              <img
                src="https://i.postimg.cc/4xD7bsd8/b2db1a88-a17a-4de9-80ef-e08cb81923b5.jpg"
                alt="Taller CR Alineaciones"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
              />

               <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
           {/* GOOGLE REVIEWS */}
      {/*<div className="row">
       <div
  className="elfsight-app-a46fb02c-b085-4cf7-8d60-e8198947b057"
  data-elfsight-app-lazy
></div>
        </div>*/}
        
        </div>
      </section>
    </div>
  );
}
