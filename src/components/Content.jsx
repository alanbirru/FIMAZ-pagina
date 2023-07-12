import QuienesSomos from "./pages/QuienesSomos";
import Precios from "./pages/Precios";
import Contacto from "./pages/Contacto";

const Content = ({ navItems }) => {
  const paddingTop = "pt-28";

  return (
    <div className="container mx-auto flex w-[90%] flex-col gap-10   bg-gray-100 p-8 md:w-[100%] md:gap-40 md:text-xl">
      <QuienesSomos
        title={navItems[1].SectionTitle}
        paddingTop={paddingTop}
        id={navItems[1].id}
      />
      <Precios
        title={navItems[2].SectionTitle}
        paddingTop={paddingTop}
        id={navItems[2].id}
      />
      <Contacto
        title={navItems[3].SectionTitle}
        paddingTop={paddingTop}
        id={navItems[3].id}
      />
    </div>
  );
};
export default Content;
