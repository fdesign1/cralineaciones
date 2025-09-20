
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function ContactPage() {
  usePageTitle({
    title: "Contacto y Ubicación - Bahía Blanca.",
    description: "Contacta con CR Alineaciones Lubricentro. Ubicados en Remedios de Escalada 366, Bahía Blanca. Tel: 291 446-0056. ¡Solicita tu turno!"
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Contáctanos
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Estamos Aquí
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes alguna consulta? ¿Necesitas agendar un turno? 
              Estamos listos para ayudarte con el cuidado de tu vehículo.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column: Description */}
            <div data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Tu Taller de
                <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Confianza
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                En CR Alineaciones Lubricentro, nos dedicamos al cuidado integral de tu vehículo. Con años de experiencia y un equipo de profesionales apasionados, ofrecemos servicios de alta calidad para garantizar tu seguridad y el óptimo rendimiento de tu auto.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Utilizamos tecnología de punta, como nuestra alineadora 3D, y trabajamos con las mejores marcas del mercado para asegurarte un servicio confiable y duradero. Tu tranquilidad es nuestra prioridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/turnos"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">Solicitar Turno</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10">Ver Servicios</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div data-aos="fade-left" data-aos-duration="800">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://i.postimg.cc/4xD7bsd8/b2db1a88-a17a-4de9-80ef-e08cb81923b5.jpg"
                  alt="Taller CR Alineaciones - Equipo profesional trabajando"
                  className="w-full h-80 lg:h-96 object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                    Equipo profesional trabajando para mejorar tu auto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300" data-aos="fade-up" data-aos-duration="800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Teléfono</h3>
              </div>
              <p className="text-gray-300 mb-4">Llámanos para consultas inmediatas</p>
              <a 
                href="tel:+5492914460056" 
                className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
              >
                +54 9 291 446-0056
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-300 mb-4">Escríbenos para consultas detalladas</p>
              <a 
                href="mailto:jonaiturre@icloud.com" 
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                jonaiturre@icloud.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Ubicación</h3>
              </div>
              <p className="text-gray-300 mb-4">Visítanos en nuestro taller</p>
              <p className="text-red-400 font-medium">
                Remedios de Escalada 366<br />
                Bahía Blanca, B8000
              </p>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Horarios de Atención</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-white font-semibold mb-2">Lunes - Viernes</p>
                <p className="text-gray-300">8:00 AM - 17:00 PM</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold mb-2">Sábados</p>
                <p className="text-gray-300">8:00 AM - 13:00 PM</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold mb-2">Domingos</p>
                <p className="text-gray-300 text-red-400">Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" data-aos="fade-right" data-aos-duration="800">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white font-medium mb-2 block">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-medium mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white font-medium mb-2 block">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="+54 9 291 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-white font-medium mb-2 block">
                        Servicio de Interés
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                      >
                        <option value="" className="bg-gray-800">Selecciona un servicio</option>
                        <option value="alineacion" className="bg-gray-800">Alineación 3D</option>
                        <option value="balanceo" className="bg-gray-800">Balanceo</option>
                        <option value="cambio-aceite" className="bg-gray-800">Cambio de Aceite</option>
                        <option value="frenos" className="bg-gray-800">Sistema de Frenos</option>
                        <option value="suspension" className="bg-gray-800">Suspensión</option>
                        <option value="otro" className="bg-gray-800">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-medium mb-2 block">
                      Mensaje *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : isSubmitted ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        ¡Mensaje Enviado!
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </div>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8" data-aos="fade-left" data-aos-duration="800">
                {/* Map */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-400" />
                    Nuestra Ubicación
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4585442593675!2d-62.24657642402484!3d-38.730238571760324!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x95eda312c15fc1cd%3A0x50b1cf900bcdcd5d!2sCR%20ALINEACIONES%20LUBRICENTRO!5e0!3m2!1ses-419!2spl!4v1757430983622!5m2!1ses-419!2spl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación CR Alineaciones"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-gray-300 text-sm mt-3 text-center">
                    Remedios de Escalada 366, Bahía Blanca
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    Contacto Rápido
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/+5492914460056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-green-600/20 rounded-lg hover:bg-green-600/30 transition-all duration-300 group"
                    >
                      <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white font-medium">WhatsApp</span>
                    </a>
                    <Link
                      to="/turnos"
                      className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-all duration-300 group"
                    >
                      <Clock className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white font-medium">Agendar Turno</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
