
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { FAQPage } from '@/pages/FAQPage';
import { ContactPage} from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { UnderConstructionPage } from '@/pages/UnderConstructionPage';
//import { ProductsPage } from '@/pages/ProductsPage';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/catalogo" element={<UnderConstructionPage />} />
            <Route path="/turnos" element={<UnderConstructionPage />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
