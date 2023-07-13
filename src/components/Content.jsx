import QuienesSomos from "./pages/QuienesSomos";
import Precios from "./pages/Precios";
import Contacto from "./pages/Contacto";

const Content = ({ navItems }) => {
  const paddingTop = "pt-28";

  return (
    <div className=" mx-auto flex w-[90%] flex-col gap-10    text-gray-700 md:w-[100%] md:gap-40 md:text-xl">
      <div className=" bg-gray-200 pb-28">
        <QuienesSomos
          title={navItems[1].SectionTitle}
          paddingTop={paddingTop}
          id={navItems[1].id}
        />
      </div>
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
