import Servicios from "./pages/Servicios";
import Precios from "./pages/Precios";
import Contacto from "./pages/Contacto";

const Content = ({ navItems }) => {
  const paddingTop = "pt-28";

  return (
    <div className="container mx-auto flex w-[80%] flex-col gap-10 md:w-[100%] md:gap-40">
      <Servicios
        title={navItems[1].title}
        paddingTop={paddingTop}
        id={navItems[1].id}
      />
      <Precios
        title={navItems[2].title}
        paddingTop={paddingTop}
        id={navItems[2].id}
      />
      <Contacto
        title={navItems[3].title}
        paddingTop={paddingTop}
        id={navItems[3].id}
      />
    </div>
  );
};
export default Content;
