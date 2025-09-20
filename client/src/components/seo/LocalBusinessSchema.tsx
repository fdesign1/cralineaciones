import * as React from 'react';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "CR Alineaciones Lubricentro",
    "description": "Taller mecánico especializado en alineación 3D, balanceo, cambio de aceite y servicios automotrices en Bahía Blanca. Tecnología de última generación y atención personalizada.",
    "url": "https://cralineaciones.com",
    "telephone": "+5492914460056",
    "email": "jonaiturre@icloud.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Remedios de Escalada 366",
      "addressLocality": "Bahía Blanca",
      "addressRegion": "Buenos Aires",
      "postalCode": "B8000",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-38.730238571760324",
      "longitude": "-62.24657642402484"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "ARS",
    "areaServed": {
      "@type": "City",
      "name": "Bahía Blanca"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-38.730238571760324",
        "longitude": "-62.24657642402484"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Automotrices",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alineación 3D",
            "description": "Alineación de vehículos con tecnología 3D de última generación"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balanceo de Ruedas",
            "description": "Balanceo computarizado para mayor seguridad y durabilidad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Aceite",
            "description": "Cambio de aceite con productos de primera calidad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistema de Frenos",
            "description": "Reparación y mantenimiento del sistema de frenos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suspensión",
            "description": "Reparación y mantenimiento de la suspensión del vehículo"
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/cralineaciones",
      "https://wa.me/+5492914460056"
    ],
    "image": "https://cralineaciones.com/logo.png",
    "logo": "https://cralineaciones.com/logo.png"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
