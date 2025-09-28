# Configuración de EmailJS para CR Alineaciones

## 📧 Configuración del Servicio de Correo

Este proyecto utiliza EmailJS para el envío de correos desde el formulario de contacto. Los correos se envían automáticamente a `matiasferreras33@gmail.com` cuando un usuario completa el formulario.

## 🔧 Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el Servicio de Email
1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. Anota el **Service ID** generado

### 3. Crear Template de Email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este template como base:

```
Asunto: Nuevo mensaje de contacto - CR Alineaciones

Hola,

Has recibido un nuevo mensaje de contacto desde el sitio web de CR Alineaciones:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de cralineaciones.com
```

4. Anota el **Template ID** generado

### 4. Obtener Public Key
1. Ve a **Account** > **General**
2. Copia tu **Public Key**

### 5. Actualizar Variables de Entorno
Actualiza el archivo `.env` en la carpeta `client/` con tus credenciales reales:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui

# API Configuration
VITE_API_URL=http://localhost:3001
VITE_WORDPRESS_URL=https://cralineacionestienda.hstn.me
```

## 📋 Variables del Template

El formulario envía las siguientes variables al template de EmailJS:

- `{{from_name}}` - Nombre del usuario
- `{{from_email}}` - Email del usuario
- `{{phone}}` - Teléfono del usuario (opcional)
- `{{service}}` - Servicio de interés seleccionado
- `{{message}}` - Mensaje del usuario
- `{{to_email}}` - Email de destino (matiasferreras33@gmail.com)
- `{{reply_to}}` - Email para responder (email del usuario)

## 🚀 Probar la Configuración

1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

2. Ve a la página de contacto: `http://localhost:3000/contact`

3. Completa el formulario y envía un mensaje de prueba

4. Verifica que recibas el correo en `matiasferreras33@gmail.com`

## ⚠️ Notas Importantes

- **Límites de la cuenta gratuita**: 200 emails/mes
- **Seguridad**: Las credenciales están en variables de entorno, no en el código
- **Fallback**: Si falla el envío, se muestra un mensaje de error con opción de contactar por WhatsApp
- **Validación**: El formulario valida campos requeridos antes del envío

## 🔒 Seguridad

- Las credenciales de EmailJS están en variables de entorno
- No se exponen en el código fuente
- El servicio es seguro y confiable
- Los datos del formulario se envían directamente a EmailJS

## 📞 Soporte

Si tienes problemas con la configuración:
1. Verifica que las variables de entorno estén correctas
2. Asegúrate de que el servicio de email esté conectado en EmailJS
3. Revisa la consola del navegador para errores
4. Verifica que el template tenga las variables correctas
