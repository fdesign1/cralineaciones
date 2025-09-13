
import * as React from "react";
import { ProductCard } from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const storeUrl = "https://cralineacionestienda.infinityfree.me/";

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
    name: "Baterías",
    description: "Batería de alta durabilidad y arranque confiable para todo tipo de vehículos.",
    imageUrl: "https://www.suzuki.com.ar/media/aq0hjisp/c%C3%B3mo-desconectar-la-bater%C3%ADa-de-un-auto.webp?rmode=max&width=1000&height=700",
  },
  {
    name: "Líquido Refrigerante",
    description: "Protege tu motor del sobrecalentamiento y la corrosión con nuestro líquido refrigerante.",
    imageUrl: "https://www.repsol.com/content/dam/images-ecommerce/particulares/asesoramiento/cards-asesoramiento/card-asesoramiento-cambiar-anticongelante-coche.jpg",
  },
  {
    name: "Amortiguadores",
    description: "Amortiguadores de alta calidad para una conducción suave y segura.",
    imageUrl: "https://motor.elpais.com/wp-content/uploads/2022/02/shock-absorber-gd7b088548_1920.jpg",
  },
];

const brands = [
  {
    name: "Castrol",
    logoUrl:
      "https://cdn.freebiesupply.com/logos/large/2x/castrol-12-logo-png-transparent.png",
  },
  {
    name: "Shell Helix",
    logoUrl:
      "https://i.imgur.com/KhdBfU6.png",
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
    name: "Continental",
    logoUrl:
      "https://i.imgur.com/vPbF2pO.png",
  },
   {
    name: "Quartz",
    logoUrl:
      "https://i.imgur.com/D3zXYjN.png",
  },
  {
    name: "Bosch",
    logoUrl:
      "https://i.imgur.com/gyfaBG2.png",
  },
   {
    name: "Mann Filter",
    logoUrl:
      "https://i.imgur.com/cLaccJN.png",
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
                {products.map((product, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[95%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <ProductCard {...product} href={storeUrl} />
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
            Marcas con las que trabajamos
          </h3>
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <img src={brand.logoUrl} alt={brand.name} className="h-8 md:h-10 lg:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <img src={brand.logoUrl} alt={brand.name} className="h-8 md:h-10 lg:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
