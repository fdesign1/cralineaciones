# CR Alineaciones Lubricentro

Sitio web profesional para CR Alineaciones Lubricentro, un taller mecánico especializado en alineación 3D, balanceo, cambio de aceite y servicios del automotor en Bahía Blanca, Argentina.

## 🚗 Sobre el Proyecto

CR Alineaciones es una aplicación web moderna desarrollada con React y TypeScript que presenta los servicios de un taller mecánico especializado. El sitio incluye una galería de trabajos, catálogo de productos, sistema de turnos y información detallada sobre los servicios ofrecidos.

## ✨ Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: UI/UX moderna con animaciones suaves y efectos visuales
- **SEO Optimizado**: Schema markup para negocio local y optimización para motores de búsqueda
- **Galería de Trabajos**: Muestra visual de los servicios realizados
- **Catálogo de Productos**: Integración con WordPress para gestión de productos
- **Sistema de Turnos**: Integración con Calendly para reserva de citas
- **WhatsApp Flotante**: Contacto directo con el taller
- **Widget del Clima**: Información meteorológica local
- **Animaciones AOS**: Efectos de scroll para mejor experiencia de usuario

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Biblioteca de animaciones
- **React Router** - Enrutamiento del lado del cliente
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll

### UI Components
- **Radix UI** - Componentes accesibles y personalizables
- **Lucide React** - Iconos modernos
- **Embla Carousel** - Carrusel de imágenes
- **React Intersection Observer** - Detección de elementos en viewport

### Backend & APIs
- **Express.js** - Servidor web
- **WordPress REST API** - Gestión de productos
- **Netlify Functions** - Funciones serverless

## 📁 Estructura del Proyecto

```
crdevs/
├── client/                     # Aplicación React
│   ├── src/
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── features/       # Componentes específicos de funcionalidades
│   │   │   ├── layout/         # Componentes de layout
│   │   │   ├── seo/           # Componentes de SEO
│   │   │   └── ui/            # Componentes de UI base
│   │   ├── pages/             # Páginas de la aplicación
│   │   ├── assets/            # Imágenes y recursos estáticos
│   │   ├── data/              # Datos estáticos
│   │   ├── hooks/             # Hooks personalizados
│   │   ├── lib/               # Utilidades
│   │   └── types/             # Definiciones de tipos TypeScript
│   ├── public/                # Archivos públicos
│   └── package.json
├── server/                    # Servidor Express
├── netlify/                   # Funciones Netlify
├── scripts/                   # Scripts de desarrollo
└── package.json              # Dependencias del proyecto principal
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd crdevs
   ```

2. **Instalar dependencias del proyecto principal**
   ```bash
   npm install
   ```

3. **Instalar dependencias del cliente**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Desarrollo

1. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

2. **Iniciar solo el cliente (desarrollo frontend)**
   ```bash
   cd client
   npm run dev
   ```

3. **Construir para producción**
   ```bash
   npm run build
   ```

## 🌐 Páginas y Funcionalidades

### Páginas Principales
- **Inicio** (`/`) - Página principal con hero section, servicios destacados y galería
- **Servicios** (`/services`) - Detalle completo de todos los servicios ofrecidos
- **Galería** (`/gallery`) - Galería de trabajos realizados
- **FAQ** (`/faq`) - Preguntas frecuentes
- **Contacto** (`/contact`) - Información de contacto y formulario
- **Turnos** (`/turnos`) - Sistema de reserva de turnos
- **Catálogo** (`/catalogo`) - Productos disponibles

### Servicios Ofrecidos
- Cambio de Aceite
- Frenos
- Balanceo
- Lubricentro
- Alineación 3D
- Embragues
- Distribución
- Tren Delantero
- Suspensión
- Baterías
- Enderezado de Llantas

## 🎨 Personalización

### Colores y Tema
El proyecto utiliza un esquema de colores oscuro con acentos rojos y azules. Los colores principales se definen en `tailwind.config.js`.

### Componentes
Los componentes están organizados por funcionalidad:
- `features/` - Componentes específicos de funcionalidades
- `layout/` - Componentes de estructura (Header, Footer, etc.)
- `ui/` - Componentes base reutilizables

### Imágenes
Las imágenes se almacenan en `client/src/assets/` y se organizan por categorías (servicios, marcas, etc.).

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile First**: Diseño pensado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y elementos optimizados para touch

## 🔧 Configuración de Desarrollo

### Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:
```env
# Configuración de la API
VITE_API_URL=http://localhost:3001
VITE_WORDPRESS_URL=https://tu-sitio-wordpress.com
```

### Scripts Disponibles
- `npm start` - Inicia el servidor de desarrollo completo
- `npm run build` - Construye la aplicación para producción
- `npm run build:client` - Construye solo el cliente

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conectar el repositorio con Netlify
2. Configurar el build command: `npm run build`
3. Configurar el publish directory: `dist`
4. Configurar las funciones en `netlify/functions/`

### Otros Proveedores
El proyecto puede desplegarse en cualquier proveedor que soporte aplicaciones React estáticas.

## 📊 SEO y Performance

### Optimizaciones SEO
- Schema markup para negocio local
- Meta tags optimizados
- Sitemap XML
- Robots.txt
- Imágenes optimizadas

### Performance
- Lazy loading de imágenes
- Code splitting
- Optimización de bundles
- Compresión de assets

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a CR Alineaciones Lubricentro.

## 📞 Contacto

**CR Alineaciones Lubricentro**
- 📍 Bahía Blanca, Argentina
- 📱 WhatsApp: +54 9 291 446-0056
- 🌐 Sitio Web: [cralineaciones.com](https://cralineaciones.com)
- AEONFREE - mf33@gmail.com
cralineacionestienda.hstn.me
---

Desarrollado con ❤️ para CR Alineaciones Lubricentro
