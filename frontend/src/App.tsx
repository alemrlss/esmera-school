import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoticesPage from "./pages/NoticesPage";
import ConoceEsmeraPage from "./pages/ConoceEsmeraPage";
import CourseDetails from "./pages/CourseDetails";
import CursoInfo from "./pages/CourseInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas hijas */}
          <Route index element={<HomePage />} />
          <Route path="conoce-esmera" element={<ConoceEsmeraPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="noticias" element={<NoticesPage />} />
          <Route path="legal" element={<div>Legal Page</div>} />
          <Route path="/cursos/:categoria" element={<CourseDetails />} />
          <Route path="/cursos/:categoria/:id" element={<CursoInfo />} />

          <Route path="*" element={<h2>Ruta 404</h2>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
