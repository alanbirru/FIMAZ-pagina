import Servicios from "./pages/Servicios";
import Precios from "./pages/Precios";
import Contacto from "./pages/Contacto";
const Content = ({ navItems }) => {
  const paddingTop = "pt-28";
  return (
    <div className="container mx-auto flex w-[80%] flex-col gap-10 md:w-[100%] md:gap-40 ">
      <Servicios title={navItems.title} paddingTop={paddingTop} />
      <Precios title={navItems.title} paddingTop={paddingTop} />
      <Contacto title={navItems.title} paddingTop={paddingTop} />
    </div>
  );
};
export default Content;
