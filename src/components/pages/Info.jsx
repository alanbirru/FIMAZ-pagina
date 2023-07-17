import estructuraUno from "../../assets/Estructura del evento/estructura-1.jpg";
import estructuraDos from "../../assets/Estructura del evento/estructura-2.jpg";
import estructuraTres from "../../assets/Estructura del evento/estructura-3.jpg";

import DondeSera from "./Secciones info/DondeSera";
import CuandoSera from "./Secciones info/CuandoSera";
import ComoSeraAcceso from "./Secciones info/ComoSeraAcceso";
import QuienesPodranAsistir from "./Secciones info/QuienesPodranAsistir";
import EstructuraEvento from "./Secciones info/EstructuraEvento";
import Stands from "./Secciones info/Stands";

const Info = ({ paddingTop, title, id }) => {
  return (
    <section className={`${paddingTop} `} id={id}>
      <>
        {title}
        <div className=" container  mx-auto  flex  flex-wrap  items-start justify-center  gap-8 md:gap-14">
          <DondeSera />
          <CuandoSera />
          <ComoSeraAcceso />
          <QuienesPodranAsistir />
          <EstructuraEvento
            estructuraUno={estructuraUno}
            estructuraDos={estructuraDos}
            estructuraTres={estructuraTres}
          />
          <Stands />
        </div>
      </>
    </section>
  );
};

export default Info;
