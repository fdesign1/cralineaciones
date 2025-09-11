
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ContactPage} from '@/pages/ContactPage';
import { ProductsPage } from '@/pages/ProductsPage';
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
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />


            {/* Define other routes here for Contact page when it is created */}
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
