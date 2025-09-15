
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const services = [
  { name: "Cambio de Aceite", href: "/services#aceite" },
  { name: "Frenos", href: "/services#frenos" },
  { name: "Balanceo", href: "/services#balanceo" },
  { name: "Lubricentro", href: "/services#lubricentro" },
  { name: "Alineación 3D", href: "/services#alineacion3d" },
  { name: "Embragues", href: "/services#embragues" },
  { name: "Distribución", href: "/services#distribucion" },
  { name: "Tren Delantero", href: "/services#trendelantero" },
  { name: "Suspensión", href: "/services#suspension" },
  { name: "Baterías", href: "/services#baterias" },
  { name: "Enderezado de llantas", href: "/services#enderezadodellantas" },
];

export function Navigation({ isMobile = false, onLinkClick }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (href: string) => {
    navigate(href);
    if (onLinkClick) {
      onLinkClick();
    }
    setIsServicesOpen(false);
  };

  const NavLink = ({
    to,
    children,
    isExternal = false,
  }: {
    to: string;
    children: React.ReactNode;
    isExternal?: boolean;
  }) => {
    const handleClick = () => {
      if (onLinkClick) {
        onLinkClick();
      }
    };

    if (isExternal) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        to={to}
        onClick={handleClick}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {children}
      </Link>
    );
  };

  const navClasses = cn(
    "flex items-center gap-6",
    isMobile && "flex-col items-start gap-4"
  );

  return (
    <nav className={navClasses}>
      <NavLink to="/">Inicio</NavLink>
      <div className="relative">
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
          className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none"
        >
          Servicios <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
        </button>
        {isServicesOpen && (
          <div className={cn(
            "absolute z-50 mt-2 w-48 rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
            isMobile && "relative !w-full !mt-1 !border-none !shadow-none !bg-transparent !p-0"
          )}>
            <div className={cn(
              "grid gap-1",
              isMobile && "grid-cols-1 gap-2 pl-4"
            )}>
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleServiceClick(service.href)}
                  className="w-full text-left px-2 py-1.5 text-sm font-medium text-muted-foreground rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <NavLink to="https://cralineacionestienda.infinityfree.me/tienda" isExternal>Catálogo</NavLink>
      <NavLink to="https://cralineacionestienda.infinityfree.me/turnos" isExternal>Turnos</NavLink>
      <NavLink to="/contact">Quiénes somos?</NavLink>
    </nav>
  );
}
