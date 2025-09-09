// src/pages/Contact.tsx
import React from "react";

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Map */}
      <div className="w-full h-[400px] md:h-[500px]">
        <iframe
          title="Workshop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4585442593675!2d-62.24657642402484!3d-38.730238571760324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda312c15fc1cd%3A0x50b1cf900bcdcd5d!2sCR%20ALINEACIONES%20LUBRICENTRO!5e0!3m2!1ses-419!2spl!4v1757412059597!5m2!1ses-419!2spl"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 bg-gray-50 py-12 px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contacto
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="contacto@email.com"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="+5492914556688"
              />
            </div>
            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>
            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
