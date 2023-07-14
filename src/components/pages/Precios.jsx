import estructuraUno from "../../assets/Estructura del evento/estructura-1.jpg";
import estructuraDos from "../../assets/Estructura del evento/estructura-2.jpg";
import estructuraTres from "../../assets/Estructura del evento/estructura-3.jpg";

const Precios = ({ paddingTop, title, id }) => {
  return (
    <section className={`${paddingTop} `} id={id}>
      <>
        {title}
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <h3 className="mb-10 text-center">
              ¿<span className=" text-primary">Dónde</span> se llevara acabo?
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className=" mb-10 text-center ">
              ¿Cuando <span className="mb text-primary">será</span>?
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-10 text-center ">
              ¿Como será <span className="text-primary">acceso</span>?
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-10 text-center ">
              ¿Quienes podrán <span className="text-primary">asistir</span>?
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-10 text-center ">
              Estructura del <span className="text-primary">evento</span>
            </h3>
            <div className="flex flex-col items-center justify-center gap-10 ">
              <a href={estructuraUno}>
                <img
                  className=" w-[500px] drop-shadow-xl"
                  src={estructuraUno}
                  alt="image"
                />
              </a>

              <a href={estructuraDos}>
                <img
                  className="w-[500px] drop-shadow-xl"
                  src={estructuraDos}
                  alt="image"
                />
              </a>

              <a href={estructuraTres}>
                <img
                  className=" w-[1000px] drop-shadow-xl"
                  src={estructuraTres}
                  alt="image"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-10 text-center ">Stands</h3>
          </div>
        </div>
      </>
    </section>
  );
};

export default Precios;
