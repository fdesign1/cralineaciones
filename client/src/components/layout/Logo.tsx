import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center space-x-2", className)}>
      <span className="font-bold text-lg">CR alineaciones</span>
    </Link>
  );
}
