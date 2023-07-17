const EstructuraEvento = ({ estructuraUno, estructuraDos, estructuraTres }) => {
  return (
    <div className="flex flex-col justify-center rounded-xl p-8  shadow-md">
      <h3 className="mb-14 text-center ">
        Estructura del <span className="text-primary">evento</span>
      </h3>

      <div className="mb-14  flex flex-wrap items-center justify-center gap-10">
        <a href={estructuraUno}>
          <img
            className=" w-[300px] drop-shadow-xl"
            src={estructuraUno}
            alt="image"
          />
        </a>

        <a href={estructuraDos}>
          <img
            className="w-[300px] drop-shadow-xl"
            src={estructuraDos}
            alt="image"
          />
        </a>

        <a href={estructuraTres}>
          <img
            className=" w-[700px] drop-shadow-xl"
            src={estructuraTres}
            alt="image"
          />
        </a>
      </div>
    </div>
  );
};

export default EstructuraEvento;
