import Nosotros from "./pages/Nosotros";
import Info from "./pages/Info";
import Contacto from "./pages/Contacto";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Content = ({ navItems }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const paddingTop = "pt-28";

  return (
    <div className=" mx-auto flex w-[100%] flex-col   text-lg text-gray-500 md:w-[100%] md:gap-40 md:text-xl ">
      <div className=" bg-gray-800 p-7  pb-32 md:pb-44 ">
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
