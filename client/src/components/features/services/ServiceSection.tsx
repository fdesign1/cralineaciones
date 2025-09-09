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
          "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
        )}
      >
        <div className={cn(isImageLeft ? "md:order-1" : "md:order-2")}>
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
          />
        </div>
        <div className={cn(isImageLeft ? "md:order-2" : "md:order-1")}>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
