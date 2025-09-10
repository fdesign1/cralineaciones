
import * as React from "react";
import { ProductCard } from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    name: "Aceite Sintético 5W-30",
    description:
      "Aceite de motor 100% sintético para un rendimiento superior y mayor protección.",
    imageUrl:
      "https://www.shell.com.ar/motorists/oils-lubricants/helix-for-cars/helix-fully-synthetic/shell-helix-ultra-5w-40/_jcr_content/root/main/section/standalone_asset.shellimg.png/1702283589706/shell-helix-ultra-5w-40.png?imwidth=301&impolicy=amidala-image&imdensity=1",
  },
  {
    name: "Pastillas de Freno Cerámicas",
    description:
      "Pastillas de freno de alto rendimiento que ofrecen una frenada silenciosa y duradera.",
    imageUrl:
      "https://m.media-amazon.com/images/I/41J9VgxiYQL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Filtro de Aire",
    description:
      "Filtro de aire de alta eficiencia que mejora el rendimiento del motor y el consumo de combustible.",
    imageUrl: "https://www.filtrosmareno.com.ar/assets/img/aire/aire_2.jpg",
  },
  {
    name: "Batería de 12V",
    description: "Batería de alta durabilidad y arranque confiable para todo tipo de vehículos.",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_802112-MLA46374942391_062021-O.webp",
  },
  {
    name: "Líquido Refrigerante",
    description: "Protege tu motor del sobrecalentamiento y la corrosión con nuestro líquido refrigerante.",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_803698-MLA48040999693_102021-O.webp",
  },
  {
    name: "Amortiguadores",
    description: "Amortiguadores de alta calidad para una conducción suave y segura.",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_787759-MLA46374942395_062021-O.webp",
  },
];

const brands = [
  {
    name: "Castrol",
    logoUrl:
      "https://cdn.freebiesupply.com/logos/large/2x/castrol-12-logo-png-transparent.png",
  },
  {
    name: "Pirelli",
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2017/08/Michelin-logo.png",
  },
  {
    name: "Motul",
    logoUrl:
      "https://logos-world.net/wp-content/uploads/2023/03/Motul-Logo.png",
  },
  {
    name: "Mahle",
    logoUrl: "https://qsv.co.za/wp-content/uploads/2020/06/Mahle.png",
  },
  {
    name: "Goodyear",
    logoUrl:
      "https://purepng.com/public/uploads/large/purepng.com-goodyear-logologobrand-logoiconslogos-251519939956sipnb.png",
  },
];

export function ProductsAndBrands() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Nuestros Productos y Marcas
        </h2>

        {/* Productos */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-center mb-8">Tienda</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProductCard {...product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Marcas */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Marcas con las que trabajamos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16">
            {brands.map((brand, index) => (
              <img
                key={brand.name}
                src={brand.logoUrl}
                alt={brand.name}
                className="h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
