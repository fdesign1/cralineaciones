import * as React from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Construction, Clock, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function UnderConstructionPage() {
  usePageTitle({
    title: "En Construcción - Próximamente Disponible",
    description: "Esta sección está en construcción. Pronto estará disponible para ofrecerte una mejor experiencia. Mientras tanto, contáctanos directamente."
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-4">
            <Construction className="w-12 h-12 text-yellow-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🚧 En Construcción
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Estamos trabajando para mejorar tu experiencia. Esta sección estará disponible muy pronto 
          con nuevas funcionalidades que te facilitarán agendar turnos y explorar nuestros productos.
        </p>

        {/* Status */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-3">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Estado del sitio</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-600">75% Completado - Estimado: Próximas semanas</p>
        </div>

        {/* Contact Options */}
        <div className="bg-red-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Mientras tanto, contáctanos directamente:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/+5492914460056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            
            <a
              href="tel:+5492914460056"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Llamar
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">¿Qué puedes hacer ahora?</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/services"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-medium text-gray-900">Ver Servicios</h3>
              <p className="text-sm text-gray-600">Conoce nuestros servicios</p>
            </Link>
            
            <Link
              to="/gallery"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">📸</div>
              <h3 className="font-medium text-gray-900">Galería</h3>
              <p className="text-sm text-gray-600">Ve nuestros trabajos</p>
            </Link>
            
            <Link
              to="/faq"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">❓</div>
              <h3 className="font-medium text-gray-900">Preguntas</h3>
              <p className="text-sm text-gray-600">Resuelve tus dudas</p>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center text-red-700 hover:text-red-800 font-medium"
          >
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
