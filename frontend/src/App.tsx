import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas hijas */}
          <Route index element={<HomePage/>} />
          <Route path="cursos" element={<div>Cursos Page</div>} />
          <Route path="conoce-esmera" element={<div>Conoce Esmera Page</div>} />
          <Route path="contacto" element={<div>Contacto</div>} />
          <Route path="noticias" element={<div>Noticias Page</div>} />
          <Route path="legal" element={<div>Legal Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
