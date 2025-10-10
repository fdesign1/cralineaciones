import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className, imgUrl }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center space-x-2", className)}>
      <img
        src="https://i.imgur.com/zhJjDfK.png"
        alt="Logo CR Alineaciones"
        className="h-14 w-auto ml-4"
        loading="lazy"
        decoding="async"
      />
    </Link>
  );
}
