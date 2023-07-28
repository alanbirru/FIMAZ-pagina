import calendario from "../../../assets/calendario.png";
const CuandoSera = () => {
  return (
    <div
      className="mb-5 flex flex-col justify-center rounded-xl p-8  shadow-lg"
      data-aos="zoom-out-down "
      data-aos-duration="2000"
    >
      <h3 className=" mb-5 text-center ">
        ¿Cuando <span className=" text-primary">será</span>?
      </h3>
      <div className=" flex flex-wrap  items-center justify-center">
        <p className=" items-center text-center md:w-[500px]">
          Del <span className="font-extrabold">4 al 10 de diciembre</span> ,
          aprovechando que en estas fechas hay mucho turismo local y extranjero.
        </p>
        <img src={calendario} className=" w-36"></img>
      </div>
    </div>
  );
};

export default CuandoSera;
