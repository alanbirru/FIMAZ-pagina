import DicreaLogo from "../../assets/dicrea.png";

const Nosotros = ({ paddingTop, title, id }) => {
  return (
    <div>
      <section className={`mt-[20px]  ${paddingTop}`} id={id}>
        {title}
        <div className="  flex flex-row-reverse flex-wrap items-center justify-center gap-14 md:flex-row md:gap-24 ">
          <p className=" w-[550px] text-center text-white">
            DICREA es una empresa especializada en diseño y marketing digital,
            con un enfoque destacado en el sector inmobiliario. Su pasión por la
            creatividad y la tecnología los motiva a ofrecer soluciones
            innovadoras y efectivas para ayudar a sus clientes a sobresalir en
            un mercado altamente competitivo.
          </p>
          <img className=" w-40 md:w-[350px]" src={DicreaLogo} />
        </div>

        {/* <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "¿Quienes Somos?",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "¿Quienes ",
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className=" text-white"
        /> */}
      </section>
    </div>
  );
};

export default Nosotros;
