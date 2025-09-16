import { GalleryItem } from '@/components/features/gallery/GalleryGrid';
import Wheel from '@/assets/wheel.png';
import Alignment from '@/assets/alignment.png';
import Cambios from '@/assets/cambios.png';

export const galleryData: GalleryItem[] = [
  // Alineación 3D
  {
    id: 'alineacion-1',
    title: 'Alineación 3D Completa',
    category: 'alineacion',
    beforeImage: Cambios,
    afterImage: Cambios,
    description: 'Corrección completa de alineación en vehículo con desgaste irregular de neumáticos. Resultado: mejor manejo y vida útil extendida de las cubiertas.',
    service: 'Alineación 3D'
  },
  {
    id: 'alineacion-2',
    title: 'Alineación de Camioneta',
    category: 'alineacion',
    image: Alignment,
    description: 'Alineación especializada para vehículo 4x4 con suspensión modificada. Ajuste preciso para uso mixto ciudad/campo.',
    service: 'Alineación 3D'
  },

  // Frenos
  {
    id: 'frenos-1',
    title: 'Cambio de Pastillas y Discos',
    category: 'frenos',
    beforeImage: 'https://images.unsplash.com/photo-1656232976683-7b688560e427?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    afterImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&auto=format&fit=crop&q=60',
    description: 'Reemplazo completo del sistema de frenos delanteros. Pastillas gastadas y discos rayados restaurados a condición óptima.',
    service: 'Sistema de Frenos'
  },
  {
    id: 'frenos-2',
    title: 'Reparación Sistema de Frenos',
    category: 'frenos',
    image: 'https://images.unsplash.com/photo-1588017530244-c57df911f73b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Diagnóstico y reparación completa del sistema de frenos con reemplazo de componentes hidráulicos.',
    service: 'Sistema de Frenos'
  },

  // Suspensión
  {
    id: 'suspension-1',
    title: 'Cambio de Amortiguadores',
    category: 'suspension',
    beforeImage: 'https://images.unsplash.com/photo-1669136048337-5daa3adef7b2?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    afterImage: 'https://images.unsplash.com/photo-1669136048337-5daa3adef7b2?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Reemplazo de amortiguadores delanteros y traseros. Mejora notable en estabilidad y confort de manejo.',
    service: 'Suspensión'
  },
  {
    id: 'suspension-2',
    title: 'Reparación Tren Delantero',
    category: 'suspension',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Reparación completa del tren delantero incluyendo rótulas, bujes y terminales de dirección.',
    service: 'Tren Delantero'
  },

  // Motor
  {
    id: 'motor-1',
    title: 'Cambio de Aceite y Filtros',
    category: 'motor',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    beforeImage: Wheel,
    afterImage: Wheel,
    description: 'Enderezado de llanta de aleación dañada por bache. Recuperación completa sin pérdida de hermeticidad.',
    service: 'Enderezado de Llantas'
  },
  {
    id: 'llantas-2',
    title: 'Balanceo Computarizado',
    category: 'llantas',
    image: 'https://images.unsplash.com/photo-1749223673543-3c9c9100c172?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Balanceo computarizado de las 4 ruedas eliminando vibraciones en el volante a alta velocidad.',
    service: 'Balanceo'
  },

  // General
  {
    id: 'general-1',
    title: 'Servicio Completo',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Servicio integral: cambio de aceite, revisión de frenos, alineación y balanceo en una sola visita.',
    service: 'Servicio Integral'
  },
  {
    id: 'general-2',
    title: 'Diagnóstico Computarizado',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1686082307524-c89fb0bfadde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Diagnóstico completo con scanner automotriz para detectar fallas en sistemas electrónicos.',
    service: 'Diagnóstico'
  }
];

// Datos destacados para la homepage (los mejores trabajos)
export const featuredGalleryData = galleryData.filter(item => 
  ['alineacion-1', 'frenos-1', 'suspension-1', 'motor-2', 'llantas-1', 'general-1'].includes(item.id)
);
