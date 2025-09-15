
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceSection } from '@/components/features/services/ServiceSection';


const servicesData = [
  {
    id: 'aceite',
    title: 'Cambio de Aceite',
    description: 'Realizamos cambios de aceite con productos de primera calidad, tanto sintéticos como minerales. Mantener el aceite limpio y en buen estado protege el motor, mejora su rendimiento y alarga su vida útil.',
    imageUrl: 'https://images.unsplash.com/photo-1642075223291-f9ec545889fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right',
  },
  {
    id: 'frenos',
    title: 'Frenos',
    description: 'Revisamos y reemplazamos pastillas, discos y todo el sistema de frenos para garantizar tu seguridad. Un buen mantenimiento de frenos asegura una respuesta rápida y confiable en cada frenada.',
    imageUrl: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJha2VzJTIwY2FyfGVufDB8fDB8fHwy',
    imagePosition: 'left',
  },
  {
    id: 'balanceo',
    title: 'Balanceo',
    description: 'El balanceo de ruedas evita vibraciones al conducir y mejora la estabilidad del vehículo. Utilizamos equipamiento computarizado para asegurar un desgaste uniforme de los neumáticos y mayor confort al manejar. Es muy fácil sentir cuando el auto está mal balanceado. Al llegar a ciertas velocidades sentirás en el volante la vibración del vehículo, esto significa que la cubierta tiene un “abultamiento” o que los neumáticos están desbalanceados. Lo recomendable es verificar cuál de las dos causas es. Si es un abultamiento, cambia el neumático. Es importante saber que las cubiertas se cambian por par, si la cubierta trasera izquierda tiene este problema, tendrás que cambiar de igual manera la derecha. Si está desbalanceado, balancearlo. Así se evitará un desgaste irregular del neumático, además de no sentir esa molestia de las vibraciones en el volante. Otro beneficio del balanceo, es que se economiza un poco la gasolina porque la cubierta tiene un buen agarre en el piso y no va bailando.',
    imageUrl: 'https://img.zsmotor.cl/wp-content/uploads/2023/05/balanceo-rueda-2-1024x682-1.jpg',
    imagePosition: 'right',
  },
  {
    id: 'lubricentro',
    title: 'Lubricentro',
    description: 'Ofrecemos un servicio completo de lubricación para motor, caja y diferencial, además del control y reposición de fluidos. Esto ayuda a prevenir desgastes prematuros y mantiene tu vehículo siempre en óptimas condiciones.',
    imageUrl: 'https://neumarep.cl/wp-content/uploads/2025/03/Lubricentro.webp',
    imagePosition: 'left',
  },
  {
    id: 'alineacion3d',
    title: 'Alineación 3D',
    description: 'Se recomienda realizar la alineación de neumáticos dos veces al año. Aunque esto, no es una ciencia cierta, ya que cada vehículo es diferente. Por lo que te sugerimos consultar en el manual del fabricante, el tiempo estimado para hacerlo. De igual manera, se recomiendan alinear ambos ejes del auto, es decir la parte delantera y la trasera. ¿Por qué los dos y no solo uno? Si uno de los neumáticos está un poco abierto, cerrado o con una diferente inclinación, además de que crea un mayor desgaste sobre los otros neumáticos, ocasiona que el vehículo se comporte errático, es decir, que no sea tan preciso en sus movimientos, trayendo como consecuencia accidentes automovilísticos.Por seguridad o durabilidad de los neumáticos es importante hacer estas alineaciones. ¡No te olvides! De esta manera, tu vehículo será más seguro y el desgaste más parejo en tus cubiertas.',
    imageUrl: 'https://i.imgur.com/pNJC9wT.jpeg',
    imagePosition: 'right',
  },
  {
    id: 'trendelantero',
    title: 'Tren Delantero',
    description: 'Nos especializamos en la reparación y ajuste del tren delantero: rótulas, parrillas, bujes, extremos de dirección y amortiguadores. Un tren delantero en buen estado brinda seguridad, confort y mayor vida útil a tus neumáticos.',
    imageUrl: 'https://paautos.gt/inicio/wp-content/uploads/2021/06/05.-Tren-delantero.jpg',
    imagePosition: 'left',
  },
  {
    id: 'suspension',
    title: 'Suspensión',
    description: 'Revisamos y reparamos amortiguadores, espirales y otros componentes de la suspensión para garantizar un manejo suave y seguro. Una suspensión en buen estado absorbe irregularidades del camino y mejora la estabilidad.',
    imageUrl: 'https://motor.elpais.com/wp-content/uploads/2022/02/shock-absorber-gd7b088548_1920.jpg',
    imagePosition: 'right',
  },
  {
    id: 'baterias',
    title: 'Baterías',
    description: 'Ofrecemos control, diagnóstico y reemplazo de baterías. Trabajamos con las mejores marcas para asegurar un arranque confiable y el correcto funcionamiento del sistema eléctrico de tu vehículo.',
    imageUrl: 'https://www.suzuki.com.ar/media/aq0hjisp/c%C3%B3mo-desconectar-la-bater%C3%ADa-de-un-auto.webp?rmode=max&width=1000&height=700',
    imagePosition: 'left',
  },
  {
    id: 'enderezadodellantas',
    title: 'Enderezado de Llantas',
    description: 'Reparamos llantas deformadas o golpeadas con herramientas especializadas. Un correcto enderezado mejora el contacto de la rueda con el asfalto, evita vibraciones y alarga la vida de neumáticos y suspensión.',
    imageUrl: 'https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right',
  }
];


export function ServicesPage() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
      <div className="space-y-16">
        {servicesData.map((service) => (
          <ServiceSection
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            imagePosition={service.imagePosition as 'left' | 'right'}
          />
        ))}
      </div>
    </div>
  );
}
