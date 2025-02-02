import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoticesPage from "./pages/NoticesPage";
import ConoceEsmeraPage from "./pages/ConoceEsmeraPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas hijas */}
          <Route index element={<HomePage />} />
          <Route path="cursos" element={<div>Cursos Page</div>} />
          <Route path="conoce-esmera" element={<ConoceEsmeraPage/>} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="noticias" element={<NoticesPage />} />
          <Route path="legal" element={<div>Legal Page</div>} />
          <Route path="cursos/barberia" element={<div>Legal Page</div>} />
          <Route path="*" element={<h2>Ruta desconocida</h2>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
