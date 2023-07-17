import DicreaLogo from "../../assets/dicrea.png";
import { TypeAnimation } from "react-type-animation";
const Nosotros = ({ paddingTop, title, id }) => {
  return (
    <div>
      <section className={`mt-[20px]  ${paddingTop}`} id={id}>
        {title}
        <div className="  flex flex-wrap items-center justify-center gap-14 ">
          <img className=" w-36 md:w-[350px]" src={DicreaLogo} />
          <p className="font-weight: 900; w-[800px] text-center text-white  ">
            FIMAZ es una feria especializada en el sector inmobiliario que
            permite a profesionales y empresas exhibir proyectos, establecer
            contactos y mantenerse actualizados con las últimas tendencias del
            mercado. Los interesados en bienes raíces encuentran información
            relevante y conexiones valiosas.
          </p>
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
