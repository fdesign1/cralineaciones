
import * as React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    name: 'Aceite Sintético 5W-30',
    description: 'Aceite de motor 100% sintético para un rendimiento superior y mayor protección.',
    imageUrl: 'https://www.shutterstock.com/image-photo/plastic-bottle-engine-oil-isolated-600nw-2333960563.jpg',
  },
  {
    name: 'Pastillas de Freno Cerámicas',
    description: 'Pastillas de freno de alto rendimiento que ofrecen una frenada silenciosa y duradera.',
    imageUrl: 'https://www.shutterstock.com/image-photo/new-brake-pads-on-white-600nw-2159931981.jpg',
  },
  {
    name: 'Filtro de Aire',
    description: 'Filtro de aire de alta eficiencia que mejora el rendimiento del motor y el consumo de combustible.',
    imageUrl: 'https://www.shutterstock.com/image-photo/car-air-filter-on-white-600nw-1912390753.jpg',
  },
];

const brands = [
  { name: 'Bosch', logoUrl: 'https://i.imgur.com/V2yX42x.png' },
  { name: 'Michelin', logoUrl: 'https://i.imgur.com/k3Gz47b.png' },
  { name: 'Mobil', logoUrl: 'https://i.imgur.com/kSn1i4X.png' },
  { name: 'SKF', logoUrl: 'https://i.imgur.com/CoH03g0.png' },
  { name: 'Hella', logoUrl: 'https://i.imgur.com/j2a2M4s.png' },
];

export function ProductsAndBrands() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos y Marcas</h2>
        
        {/* Productos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Productos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>

        {/* Marcas */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Marcas con las que trabajamos</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16">
            {brands.map(brand => (
              <img key={brand.name} src={brand.logoUrl} alt={brand.name} className="h-10 md:h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
