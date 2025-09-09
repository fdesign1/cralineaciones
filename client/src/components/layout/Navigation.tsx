import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const services = [
  { name: "Cambio de Aceite", href: "/services#oil-service" },
  { name: "Frenos", href: "/services#brakes" },
  { name: "Suspensión", href: "/services#suspension" },
  { name: "Alineación 3D", href: "/services#3d-alignment" },
  { name: "Balanceo de Ruedas", href: "/services#wheel-alignment" },
];

export function Navigation({ isMobile = false, onLinkClick }: NavigationProps) {
  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <Link
      to={to}
      onClick={onLinkClick}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );

  const navClasses = cn(
    "flex items-center gap-6",
    isMobile && "flex-col items-start gap-4",
  );

  return (
    <nav className={navClasses}>
      <NavLink to="/">Inicio</NavLink>
      <Popover>
        <PopoverTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none">
          Servicios <ChevronDown className="h-4 w-4" />
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <div className="grid gap-4">
            {services.map((service) => (
              <NavLink key={service.name} to={service.href}>{service.name}
              </NavLink>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <NavLink to="/contact">Contacto</NavLink>
    </nav>
  );
}
