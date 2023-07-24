import LogoFimaz from "../assets/LOGO.png";
import Ripples from "react-ripples";
const Home = () => {
  return (
    <section
      id="inicio"
      className={`h-[700px]   border-b-8 border-primary  bg-[rgba(0,0,0,0.61)] bg-[url("hero.jpg")] bg-cover  bg-fixed bg-center bg-no-repeat pt-3 bg-blend-darken md:h-[1500px]`}
    >
      <div className=" flex flex-col items-center justify-center gap-2  pt-[100px]  md:pt-[480px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          className="  rounded-[0px] bg-[white] p-6 backdrop-blur-md md:rounded-[10px] "
        >
          <img src={LogoFimaz} />
        </div>

        <div className="container mx-auto w-[90%] text-center">
          <p
            data-aos="fade-down"
            data-aos-duration="600"
            className="text-md text-md pt-5 text-gray-200 md:m-auto md:w-[85%] md:text-lg "
          >
            FIMAZ es una feria especializada en el sector inmobiliario que
            permite a profesionales y empresas exhibir proyectos, establecer
            contactos y mantenerse actualizados con las últimas tendencias del
            mercado. Los interesados en bienes raíces encuentran información
            relevante y conexiones valiosas.
          </p>
        </div>

        <Ripples
          color="white"
          className=" mt-4 rounded-2xl   bg-primary p-5 text-white  transition-all hover:scale-110"
          data-aos="zoom-out"
          data-aos-duration="600"
        >
          <button className="md:w-[250px]">¿Quieres ser expositor?</button>
        </Ripples>
      </div>
    </section>
  );
};

export default Home;
