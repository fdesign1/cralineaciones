import { GalleryItem } from '@/components/features/gallery/GalleryGrid';
import Wheel from '@/assets/wheel.png';
import Alignment2 from '@/assets/alignment.jpeg';
import Pastilla from '@/assets/pastilla.jpeg';
import Suspension from '@/assets/suspension.jpeg';
import Distribucion from '@/assets/distribucion3.jpeg';
import Distribucion2 from '@/assets/distribucion4.jpeg';
import Distribucion4 from '@/assets/distribucion2.jpeg';
import Autoblanco2 from '@/assets/autoblanco2.jpeg';
import Autoblanco1 from '@/assets/autoblanco1.jpeg';
import Autogris from '@/assets/autogris.jpeg';

export const galleryData: GalleryItem[] = [
  // Alineación 3D
  {
    id: 'alineacion-1',
    title: 'Alineación de Toyota',
    category: 'alineacion',
    image: Alignment2,
    description: 'Alineación especializada para vehículo Toyota con suspensión modificada. Ajuste preciso',
    service: 'Alineación 3D'
  },

  // Frenos
  {
    id: 'frenos-1',
    title: 'Cambio de Pastillas y Discos',
    category: 'frenos',
    beforeImage: Pastilla,
    afterImage: Pastilla,
    description: 'Reemplazo completo del sistema de frenos delanteros a condición óptima.',
    service: 'Sistema de Frenos'
  },
  {
    id: 'frenos-2',
    title: 'Reparación Sistema de Frenos',
    category: 'frenos',
    image: 'https://images.unsplash.com/photo-1656232976683-7b688560e427?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Diagnóstico y reparación completa del sistema de frenos con reemplazo de componentes principales.',
    service: 'Sistema de Frenos'
  },

  // Suspensión
  {
    id: 'suspension-1',
    title: 'Cambio de Amortiguadores',
    category: 'suspension',
    beforeImage: Suspension,
    afterImage: Suspension,
    description: 'Reemplazo de amortiguadores delanteros y traseros. Mejora notable en estabilidad y confort de manejo.',
    service: 'Suspensión'
  },

  // Motor - Distribución
  {
    id: 'motor-1',
    title: 'Cambio de Cadena de Distribución',
    category: 'motor',
    beforeImage: Distribucion,
    afterImage: Distribucion2,
    description: 'Cambio completo de cadena de distribución y componentes relacionados. Trabajo de precisión para garantizar el correcto funcionamiento del motor.',
    service: 'Distribución'
  },
  {
    id: 'motor-2',
    title: 'Regulación de Tensión de Distribución',
    category: 'motor',
    image: Distribucion4,
    description: 'Ajuste y regulación de la tensión de cadena de distribución para optimizar el rendimiento del motor.',
    service: 'Distribución'
  },
  {
    id: 'motor-3',
    title: 'Cambio de Aceite y Filtros',
    category: 'motor',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Servicio completo de cambio de aceite sintético, filtro de aceite y filtro de aire para motor turbo.',
    service: 'Lubricentro'
  },
  {
    id: 'motor-4',
    title: 'Reparación de Embrague',
    category: 'motor',
    beforeImage: Autogris,
    afterImage: Autogris,
    description: 'Cambio completo de kit de embrague. Problema de patinaje solucionado.',
    service: 'Embragues'
  },

  // Llantas
  {
    id: 'llantas-1',
    title: 'Enderezado de Llanta',
    category: 'llantas',
    beforeImage: Wheel,
    afterImage: Wheel,
    description: 'Enderezado de llanta de aleación dañada por bache.',
    service: 'Enderezado de Llantas'
  },
  {
    id: 'llantas-2',
    title: 'Balanceo Computarizado',
    category: 'llantas',
    image: Autoblanco1,
    description: 'Balanceo computarizado de las 4 ruedas eliminando vibraciones en el volante a alta velocidad.',
    service: 'Balanceo'
  },

  // General
  {
    id: 'general-1',
    title: 'Servicio Completo',
    category: 'general',
    image: Autoblanco2,
    description: 'Servicio integral: cambio de aceite, revisión de frenos, alineación y balanceo en una sola visita.',
    service: 'Servicio Integral'
  },
  {
    id: 'general-2',
    title: 'Diagnóstico general',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1686082307524-c89fb0bfadde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Diagnóstico general del vehiculo para detectar fallas.',
    service: 'Diagnóstico'
  }
];

// Datos destacados para la homepage (los mejores trabajos)
export const featuredGalleryData = galleryData.filter(item => 
  ['alineacion-1', 'frenos-1', 'suspension-1', 'motor-1', 'llantas-1', 'general-1'].includes(item.id)
);
