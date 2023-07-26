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
      <div className="flex justify-center">
        <p className=" items-center text-center md:w-[500px]">
          El <span className="font-extrabold"> acceso será gratuito</span>, sin
          embargo , se tiene contemplado cobrar para poder entrar a las
          conferencias con los especialistas del sector inmobiliario.
        </p>
      </div>
    </div>
  );
};

export default ComoSeraAcceso;
