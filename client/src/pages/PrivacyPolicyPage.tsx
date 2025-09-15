
import * as React from 'react';

export function PrivacyPolicyPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Política de Privacidad</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p><strong>Última actualización:</strong> 15 de Setiembre de 2025</p>

          <p>
            En CR Alineaciones Lubricentro, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos los datos que nos proporciona a través de nuestro sitio web.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">1. Información que Recopilamos</h2>
          <p>
            Recopilamos información personal que usted nos proporciona voluntariamente cuando solicita un turno o se pone en contacto con nosotros. Esta información puede incluir:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Nombre y apellido</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información sobre su vehículo (marca, modelo, año)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">2. Uso de su Información</h2>
          <p>
            Utilizamos la información recopilada exclusivamente para los siguientes propósitos:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li><strong>Gestión de turnos:</strong> Para programar, confirmar y recordarle sus citas en nuestro taller.</li>
            <li><strong>Comunicación con el cliente:</strong> Para responder a sus consultas, proporcionarle presupuestos y mantenerlo informado sobre el estado de su vehículo.</li>
            <li><strong>Servicio al cliente:</strong> Para ofrecerle un servicio personalizado y eficiente.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">3. Protección de su Información</h2>
          <p>
            Nos comprometemos a no vender, alquilar ni compartir su información personal con terceros para fines de marketing. Su información solo será utilizada por nuestro personal para los fines descritos en esta política.
          </p>
          <p>
            Implementamos medidas de seguridad para proteger sus datos contra el acceso no autorizado, la alteración o la divulgación.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">4. Sus Derechos</h2>
          <p>
            Usted tiene derecho a acceder, corregir o solicitar la eliminación de su información personal de nuestra base de datos en cualquier momento. Para ello, puede contactarnos a través de nuestro correo electrónico o número de teléfono.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">5. Cambios en esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestra política de privacidad, no dude en contactarnos.
          </p>
        </div>
      </div>
    </div>
  );
}
