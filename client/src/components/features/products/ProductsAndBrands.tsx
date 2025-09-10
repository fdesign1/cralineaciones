import * as React from "react";
import { ProductCard } from "./ProductCard";

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
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Productos y Marcas
        </h2>

        {/* Productos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Tienda</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>

        {/* Marcas */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Marcas con las que trabajamos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16">
            {brands.map((brand) => (
              <img
                key={brand.name}
                src={brand.logoUrl}
                alt={brand.name}
                className="h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
