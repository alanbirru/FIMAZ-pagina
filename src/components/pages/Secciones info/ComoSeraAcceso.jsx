import conference from "../../../assets/conference.jpg";
const ComoSeraAcceso = () => {
  return (
    <div
      className="mb-5 flex flex-col justify-center rounded-xl p-8  shadow-lg "
      data-aos="zoom-out-down "
      data-aos-duration="2000"
    >
      <h3 className="mb-5 text-center">
        ¿Como será <span className="text-primary">acceso</span>?
      </h3>
      <div className="flex  flex-wrap  items-center justify-center gap-5">
        <p className=" items-center text-center md:w-[500px]">
          El <span className="font-extrabold"> acceso será gratuito</span>, sin
          embargo , se tiene contemplado cobrar para poder entrar a las
          conferencias con los especialistas del sector inmobiliario.
        </p>
        <div className=" relative w-[250px] overflow-hidden rounded-lg shadow-xl md:w-[350px]">
          <img className=" transition-all  hover:scale-125" src={conference} />
        </div>
      </div>
    </div>
  );
};

export default ComoSeraAcceso;
