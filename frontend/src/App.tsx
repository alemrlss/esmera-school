import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoticesPage from "./pages/NoticesPage";
import ConoceEsmeraPage from "./pages/ConoceEsmeraPage";
import CourseDetails from "./pages/CourseDetails";
import CursoInfo from "./pages/CourseInfo";
import NotFoundPage from "./pages/NotFoundPage";
import MiCampus from "./pages/MiCampus";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="conoce-esmera" element={<ConoceEsmeraPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="noticias" element={<NoticesPage />} />
          <Route path="mi-campus" element={<MiCampus />} />

          <Route path="/cursos/:category" element={<CourseDetails />} />
          <Route path="/cursos/:category/:id" element={<CursoInfo />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
