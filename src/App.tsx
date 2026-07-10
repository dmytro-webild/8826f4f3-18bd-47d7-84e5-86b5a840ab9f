import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import AboutPage from "@/pages/AboutPage";
import OurProcessPage from "@/pages/OurProcessPage";
import FaqPage from "@/pages/FaqPage";
import ContactPage from "@/pages/ContactPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-process" element={<OurProcessPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
