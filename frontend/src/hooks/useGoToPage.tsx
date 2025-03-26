import { useNavigate } from "react-router-dom";

const useGoToPage = () => {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path); // Navega a la nueva página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Hace scroll al inicio
    }, 20); // Pequeño delay para asegurar que la navegación ocurrió
  };

  return goToPage; // Devuelve la función para usarla en los componentes
};

export default useGoToPage;
