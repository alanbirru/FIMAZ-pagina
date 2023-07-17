import Nosotros from "./pages/Nosotros";
import Info from "./pages/Info";
import Contacto from "./pages/Contacto";

const Content = ({ navItems }) => {
  const paddingTop = "pt-28";

  return (
    <div className=" mx-auto flex w-[100%] flex-col   text-gray-500 md:w-[100%] md:gap-40 md:text-lg ">
      <div className=" bg-gray-800  p-7 pb-40">
        <Nosotros
          title={navItems[1].SectionTitle}
          paddingTop={paddingTop}
          id={navItems[1].id}
        />
      </div>

      <div className=" p-7">
        <Info
          title={navItems[2].SectionTitle}
          paddingTop={paddingTop}
          id={navItems[2].id}
        />
      </div>

      <div className="p-7">
        <Contacto
          title={navItems[3].SectionTitle}
          paddingTop={paddingTop}
          id={navItems[3].id}
        />
      </div>
    </div>
  );
};
export default Content;
