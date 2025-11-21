import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowToPage } from './pages/HowToPage';
import { FAQPage } from './pages/FAQPage';

function App() {
  const [cart, setCart] = useState<{ id: number, qty: number }[]>([]);

  const addToCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout cart={cart} addToCart={addToCart} />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="howto" element={<HowToPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
