import Servicios from "./pages/Servicios";
import Precios from "./pages/Precios";
import Contacto from "./pages/Contacto";
const Content = () => {
  const marginTop = "100px";
  const marginBottom = "100px";

  return (
    <div className="container mx-auto">
      <Servicios marginBottom={marginBottom} />
      <Precios marginBottom={marginBottom} />
      <Contacto marginBottom={marginBottom} />
    </div>
  );
};
export default Content;
