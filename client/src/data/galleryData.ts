import { GalleryItem } from '@/components/features/gallery/GalleryGrid';

export const galleryData: GalleryItem[] = [
  // Alineación 3D
  {
    id: 'alineacion-1',
    title: 'Alineación 3D Completa',
    category: 'alineacion',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
    afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60&brightness=1.2',
    description: 'Corrección completa de alineación en vehículo con desgaste irregular de neumáticos. Resultado: mejor manejo y vida útil extendida de las cubiertas.',
    service: 'Alineación 3D'
  },
  {
    id: 'alineacion-2',
    title: 'Alineación de Camioneta 4x4',
    category: 'alineacion',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&auto=format&fit=crop&q=60',
    description: 'Alineación especializada para vehículo 4x4 con suspensión modificada. Ajuste preciso para uso mixto ciudad/campo.',
    service: 'Alineación 3D'
  },

  // Frenos
  {
    id: 'frenos-1',
    title: 'Cambio de Pastillas y Discos',
    category: 'frenos',
    beforeImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&auto=format&fit=crop&q=60&sepia=1',
    afterImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&auto=format&fit=crop&q=60',
    description: 'Reemplazo completo del sistema de frenos delanteros. Pastillas gastadas y discos rayados restaurados a condición óptima.',
    service: 'Sistema de Frenos'
  },
  {
    id: 'frenos-2',
    title: 'Reparación Sistema de Frenos',
    category: 'frenos',
    image: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2?w=800&auto=format&fit=crop&q=60',
    description: 'Diagnóstico y reparación completa del sistema de frenos con reemplazo de componentes hidráulicos.',
    service: 'Sistema de Frenos'
  },

  // Suspensión
  {
    id: 'suspension-1',
    title: 'Cambio de Amortiguadores',
    category: 'suspension',
    beforeImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60&brightness=0.8',
    afterImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60',
    description: 'Reemplazo de amortiguadores delanteros y traseros. Mejora notable en estabilidad y confort de manejo.',
    service: 'Suspensión'
  },
  {
    id: 'suspension-2',
    title: 'Reparación Tren Delantero',
    category: 'suspension',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60',
    description: 'Reparación completa del tren delantero incluyendo rótulas, bujes y terminales de dirección.',
    service: 'Tren Delantero'
  },

  // Motor
  {
    id: 'motor-1',
    title: 'Cambio de Aceite y Filtros',
    category: 'motor',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=60',
    description: 'Servicio completo de cambio de aceite sintético, filtro de aceite y filtro de aire para motor turbo.',
    service: 'Lubricentro'
  },
  {
    id: 'motor-2',
    title: 'Reparación de Embrague',
    category: 'motor',
    beforeImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=60&sepia=1',
    afterImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=60',
    description: 'Cambio completo de kit de embrague: disco, plato y rodamiento. Problema de patinaje solucionado.',
    service: 'Embragues'
  },

  // Llantas
  {
    id: 'llantas-1',
    title: 'Enderezado de Llanta',
    category: 'llantas',
    beforeImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60&contrast=0.8',
    afterImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60',
    description: 'Enderezado de llanta de aleación dañada por bache. Recuperación completa sin pérdida de hermeticidad.',
    service: 'Enderezado de Llantas'
  },
  {
    id: 'llantas-2',
    title: 'Balanceo Computarizado',
    category: 'llantas',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60',
    description: 'Balanceo computarizado de las 4 ruedas eliminando vibraciones en el volante a alta velocidad.',
    service: 'Balanceo'
  },

  // General
  {
    id: 'general-1',
    title: 'Servicio Completo',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=60',
    description: 'Servicio integral: cambio de aceite, revisión de frenos, alineación y balanceo en una sola visita.',
    service: 'Servicio Integral'
  },
  {
    id: 'general-2',
    title: 'Diagnóstico Computarizado',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop&q=60',
    description: 'Diagnóstico completo con scanner automotriz para detectar fallas en sistemas electrónicos.',
    service: 'Diagnóstico'
  }
];

// Datos destacados para la homepage (los mejores trabajos)
export const featuredGalleryData = galleryData.filter(item => 
  ['alineacion-1', 'frenos-1', 'suspension-1', 'motor-2', 'llantas-1', 'general-1'].includes(item.id)
);
