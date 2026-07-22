import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import FooterSection from "./components/FooterSection"
import HomePage from "./pages/HomePage"
import ServiciosPage from "./pages/ServiciosPage"
import EquipoPage from "./pages/EquipoPage"
import ClinicaPage from "./pages/ClinicaPage"
import ContactoPage from "./pages/ContactoPage"

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return null
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/equipo" element={<EquipoPage />} />
        <Route path="/clinica" element={<ClinicaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
      <FooterSection />
    </div>
  )
}
