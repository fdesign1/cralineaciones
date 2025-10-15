import * as React from 'react';
import { useState } from 'react';
import { GalleryModal } from './GalleryModal';
import { GalleryCard } from './GalleryCard';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  description: string;
  service: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  showCategories?: boolean;
}

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'alineacion', name: 'Alineación' },
  { id: 'frenos', name: 'Frenos' },
  { id: 'suspension', name: 'Suspensión' },
  { id: 'motor', name: 'Motor' },
  { id: 'llantas', name: 'Llantas' },
  { id: 'general', name: 'General' }
];

export function GalleryGrid({ items, showCategories = true }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No hay trabajos disponibles en esta categoría.</p>
        </div>
      )}

      {selectedItem && (
        <GalleryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
