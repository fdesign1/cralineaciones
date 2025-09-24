import * as React from "react";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
}

export function ServiceSection({
  id,
  title,
  description,
  imageUrl,
  imagePosition = "left",
}: ServiceSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section id={id} className="scroll-mt-20">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
        )}
      >
        <div 
          className={cn(
            isImageLeft ? "lg:order-1" : "lg:order-2",
            "group relative overflow-hidden rounded-2xl shadow-2xl"
          )}
          data-aos={isImageLeft ? "fade-right" : "fade-left"}
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
            />
          </div>
          {/* Decorative elements - Ajustados para evitar desbordamiento */}
          <div className="absolute top-2 right-2 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-2 left-2 w-32 h-32 bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />
        </div>
        
        <div 
          className={cn(
            isImageLeft ? "lg:order-2" : "lg:order-1",
            "space-y-6"
          )}
          data-aos={isImageLeft ? "fade-left" : "fade-right"}
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
              {title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
          
          <a 
            href="/turnos"
            className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white font-medium rounded-xl hover:from-red-200 hover:to-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Solicitar servicio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-xl blur opacity-0 group-hover/btn:opacity-75 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
