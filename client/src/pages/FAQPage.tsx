import * as React from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { FAQSection } from '@/components/features/faq/FAQSection';
import { faqData } from '@/data/faqData';
import { MessageCircle, Phone } from 'lucide-react';

export function FAQPage() {
  usePageTitle({
    title: "Preguntas Frecuentes - Dudas sobre Servicios Automotrices",
    description: "Encuentra respuestas a las preguntas más comunes sobre alineación, balanceo, cambio de aceite y servicios automotrices en CR Alineaciones Lubricentro."
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          Preguntas Frecuentes
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Resolvemos las dudas más comunes sobre nuestros servicios de alineación, balanceo, 
          cambio de aceite y mantenimiento automotriz. Si no encuentras la respuesta que buscas, 
          no dudes en contactarnos.
        </p>
      </div>

      {/* FAQ Section */}
      <FAQSection items={faqData} title="" showCategories={true} />

      {/* Contact CTA */}
      <div className="mt-16 bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿No encontraste la respuesta que buscabas?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Nuestro equipo está listo para resolver cualquier duda específica sobre tu vehículo. 
          Contáctanos y recibe asesoramiento personalizado sin compromiso.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/+5492914460056"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar por WhatsApp
          </a>
          
          <a
            href="tel:+5492914460056"
            className="inline-flex items-center justify-center px-6 py-3 border border-red-700 text-red-700 font-medium rounded-lg hover:bg-red-50 transition-colors gap-2"
          >
            <Phone className="w-5 h-5" />
            Llamar: 291 446-0056
          </a>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black p-6 rounded-lg text-center border border-gray-800">
          <div className="text-3xl mb-3">🔧</div>
          <h3 className="font-semibold mb-2 text-white">Mantenimiento Preventivo</h3>
          <p className="text-sm text-gray-300">
            Un mantenimiento regular puede ahorrarte costosas reparaciones futuras.
          </p>
        </div>
        
        <div className="bg-black p-6 rounded-lg text-center border border-gray-800">
          <div className="text-3xl mb-3">⏰</div>
          <h3 className="font-semibold mb-2 text-white">Agenda tu Turno</h3>
          <p className="text-sm text-gray-300">
            Evita esperas innecesarias reservando tu horario preferido.
          </p>
        </div>
        
        <div className="bg-black p-6 rounded-lg text-center border border-gray-800">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="font-semibold mb-2 text-white">Garantía Incluida</h3>
          <p className="text-sm text-gray-300">
            Todos nuestros servicios incluyen garantía para tu tranquilidad.
          </p>
        </div>
      </div>
    </div>
  );
}
