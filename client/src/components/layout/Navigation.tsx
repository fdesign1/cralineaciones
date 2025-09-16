
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  SheetClose,
} from "@/components/ui/sheet";

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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navigation({ isMobile = false, onLinkClick }: NavigationProps) {
  const navigate = useNavigate();

  const handleServiceClick = (href: string) => {
    navigate(href);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const NavLink = ({
    to,
    children,
    isExternal = false,
    className,
  }: {
    to: string;
    children: React.ReactNode;
    isExternal?: boolean;
    className?: string;
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
          className={cn(navigationMenuTriggerStyle(), "bg-transparent", className)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        to={to}
        onClick={handleClick}
        className={cn(navigationMenuTriggerStyle(), "bg-transparent", className)}
      >
        {children}
      </Link>
    );
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col items-start gap-4">
        <SheetClose asChild>
          <NavLink to="/" className="w-full text-left justify-start">Inicio</NavLink>
        </SheetClose>
        <div className="w-full">
          <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Servicios</p>
          <div className="grid grid-cols-1 gap-1 pl-4">
            {services.map((service) => (
              <SheetClose asChild key={service.name}>
                <button
                  onClick={() => handleServiceClick(service.href)}
                  className="w-full text-left px-2 py-1.5 text-sm font-medium text-muted-foreground rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {service.name}
                </button>
              </SheetClose>
            ))}
          </div>
        </div>
        <SheetClose asChild>
          <NavLink to="https://cralineacionestienda.infinityfree.me/tienda" isExternal className="w-full text-left justify-start">Catálogo</NavLink>
        </SheetClose>
        <SheetClose asChild>
          <NavLink to="https://cralineacionestienda.infinityfree.me/turnos" isExternal className="w-full text-left justify-start">Turnos</NavLink>
        </SheetClose>
        <SheetClose asChild>
          <NavLink to="/contact" className="w-full text-left justify-start">Quiénes somos?</NavLink>
        </SheetClose>
      </nav>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink to="/">Inicio</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {services.map((service) => (
                <ListItem
                  key={service.name}
                  title={service.name}
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(service.href);
                  }}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="https://cralineacionestienda.infinityfree.me/tienda" isExternal>Catálogo</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="https://cralineacionestienda.infinityfree.me/turnos" isExternal>Turnos</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/contact">Quiénes somos?</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
