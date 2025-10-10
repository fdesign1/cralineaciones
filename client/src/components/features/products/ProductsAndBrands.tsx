import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

// Importar logos de marcas
import castrolLogo from '@/assets/brands/castrol.png';
import shellLogo from '@/assets/brands/shell-helix.png';
import motulLogo from '@/assets/brands/motul.png';
import mahleLogo from '@/assets/brands/mahle.png';
import continentalLogo from '@/assets/brands/continental.png';
import quartzLogo from '@/assets/brands/quartz.png';
import boschLogo from '@/assets/brands/bosch.png';
import mannFilterLogo from '@/assets/brands/mann-filter.png';
import wurthLogo from '@/assets/brands/wurth.png';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const storeUrl = "https://www.cralineaciones.com.ar";

// Interfaces para los datos de WordPress
interface WPProduct {
  id: number;
  name: string;
  images: { src: string; alt?: string }[];
  categories: { id: number; name: string; slug: string }[];
  short_description: string;
}

interface DynamicProduct {
  name: string;
  description: string;
  imageUrl: string;
  category?: string;
}

const products = [
  {
    name: "Aceites Sintéticos-Semi Sintéticos ",
    description: "",
    imageUrl: "https://www.shell.com.ar/motorists/oils-lubricants/helix-for-cars/helix-fully-synthetic/shell-helix-ultra-5w-40/_jcr_content/root/main/section/standalone_asset.shellimg.png/1702283589706/shell-helix-ultra-5w-40.png?imwidth=301&impolicy=amidala-image&imdensity=1",
  },
  {
    name: "Pastillas de Freno",
    description: "",
    imageUrl: "https://m.media-amazon.com/images/I/41J9VgxiYQL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Filtro de Aire, Nafta y Cabina",
    description: "",
    imageUrl: "https://www.filtrosmareno.com.ar/assets/img/aire/aire_2.jpg",
  },
  {
    name: "Baterías",
    description: "",
    imageUrl: "https://www.sermat.com.ar/wp-content/uploads/2023/01/bateria65am.png",
  },
  {
    name: "Neumáticos",
    description: "",
    imageUrl: "https://www.oponeo.pl/ndcr/temp/25620/continental-allseasoncontact-2-s2-f-f-l672x750-sk7.png",
  },
  {
    name: "Amortiguadores",
    description: "",
    imageUrl: "https://cdn.club-magazin.autodoc.de/uploads/sites/11/2020/11/amortiguador-de-coche.jpg",
  },
];


const brands = [
  {
    name: "Castrol",
    logoUrl: castrolLogo,
  },
  {
    name: "Shell Helix",
    logoUrl: shellLogo,
  },
  {
    name: "Motul",
    logoUrl: motulLogo,
  },
  {
    name: "Mahle",
    logoUrl: mahleLogo,
  },
  {
    name: "Continental",
    logoUrl: continentalLogo,
  },
  {
    name: "Quartz",
    logoUrl: quartzLogo,
  },
  {
    name: "Bosch",
    logoUrl: boschLogo,
  },
  {
    name: "Mann Filter",
    logoUrl: mannFilterLogo,
  },
  {
    name: "Wurth",
    logoUrl: wurthLogo,
  }
];

export function ProductsAndBrands() {
  const [dynamicProducts, setDynamicProducts] = useState<DynamicProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener productos de WordPress
  const fetchWPProducts = async () => {
    try {
      // Usar URL relativa en producción, localhost en desarrollo
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? "http://localhost:8888/.netlify/functions/products"
        : "/.netlify/functions/products";
        
      console.log("Fetching products from:", apiUrl);
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const wpProducts: WPProduct[] = await response.json();
        console.log("WordPress products loaded:", wpProducts.length);
        
        // Convertir productos de WP al formato necesario
        const convertedProducts: DynamicProduct[] = wpProducts.slice(0, 6).map(product => ({
          name: product.name,
          description: product.short_description ? stripHtml(product.short_description) : '',
          imageUrl: product.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='16'%3EProducto%3C/text%3E%3C/svg%3E",
          category: product.categories.length > 0 ? product.categories[0].name : undefined
        }));
        
        setDynamicProducts(convertedProducts);
      } else {
        console.error("API response not ok:", response.status, response.statusText);
        throw new Error(`API responded with ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching WP products:", error);
      console.log("Falling back to static products");
      // Fallback a productos estáticos si hay error
      setDynamicProducts(products);
    }
  };

  // Función para limpiar HTML
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchWPProducts();
      setLoading(false);
    };
    
    loadData();
  }, []);

  // Aplicar estilos CSS personalizados para el carrusel de marcas
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .brands-scroll {
        animation: brands-scroll 20s linear infinite;
        will-change: transform;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
      
      @keyframes brands-scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      
      /* Optimización específica para iPad */
      @media (min-width: 768px) and (max-width: 1024px) {
        .brands-scroll {
          animation: brands-scroll 25s linear infinite;
          animation-play-state: running;
        }
        
        .brands-scroll:hover {
          animation-play-state: paused;
        }
      }
      
      /* Fallback para dispositivos con problemas de animación */
      @media (prefers-reduced-motion: reduce) {
        .brands-scroll {
          animation: none;
          transform: none;
        }
      }
      
      /* Mejora de rendimiento para dispositivos móviles */
      @media (max-width: 767px) {
        .brands-scroll {
          animation: brands-scroll 15s linear infinite;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full">
        {/* Productos */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-center mb-3">
            <Button asChild size="lg" className="bg-red-700 text-white hover:bg-gray-800">
              <Link to="/catalogo">
                Ver catálogo completo
              </Link>
            </Button>
          </div>

          <div className="relative overflow-hidden px-0 sm:px-12 md:px-16 lg:px-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {dynamicProducts.map((product, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[95%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <ProductCard 
                        name={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        category={product.category}
                        href="/catalogo" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>

        {/* Marcas */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Marcas de Confianza
          </h3>
          <div className="max-w-full overflow-hidden">
            <div
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none brands-scroll">
                {brands.map((brand, index) => (
                  <li key={`${brand.name}-${index}`}>
                    <img 
                      src={brand.logoUrl} 
                      alt={brand.name} 
                      className="h-8 md:h-10 lg:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60'%3E%3Crect width='120' height='60' fill='%23e5e7eb' stroke='%236b7280' stroke-width='1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='12' font-weight='bold'%3E${brand.name}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none brands-scroll" aria-hidden="true">
                {brands.map((brand, index) => (
                  <li key={`${brand.name}-duplicate-${index}`}>
                    <img 
                      src={brand.logoUrl} 
                      alt={brand.name} 
                      className="h-8 md:h-10 lg:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60'%3E%3Crect width='120' height='60' fill='%23e5e7eb' stroke='%236b7280' stroke-width='1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='12' font-weight='bold'%3E${brand.name}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}