import LogoFimaz from "../assets/LOGO.png";
import Ripples from "react-ripples";
const Home = () => {
  return (
    <section
      id="inicio"
      className={`h-[850px]   border-b-8 border-primary  bg-[rgba(0,0,0,0.68)] bg-[url("hero.jpg")] bg-cover  bg-fixed bg-center bg-no-repeat pt-3 bg-blend-darken md:h-[1500px] `}
    >
      <div className=" flex flex-col items-center justify-center  gap-4  pt-[125px] md:gap-14  md:pt-[480px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-once="true"
          className="  w-full rounded-[0px] bg-[white] p-6 backdrop-blur-md md:w-[650px] md:rounded-[10px] "
        >
          <img src={LogoFimaz} />
        </div>

        <div className="container mx-auto w-[90%] text-center">
          <p
            data-aos="fade-right"
            data-aos-duration="1200"
            className=" pt-5 text-lg leading-loose text-gray-300 md:m-auto  md:w-[90%]  md:text-xl "
            data-aos-once="true"
          >
            <span className=" text-xl font-extrabold text-primary md:text-2xl">
              FIMAZ
            </span>{" "}
            es una feria especializada en el{" "}
            <span className=" text-xl font-extrabold text-white md:text-2xl">
              {" "}
              sector inmobiliario
            </span>{" "}
            que permite a profesionales y empresas exhibir proyectos, establecer
            contactos y mantenerse actualizados con las últimas tendencias del
            mercado. Los interesados en bienes raíces encuentran información
            relevante y{" "}
            <span className=" text-xl font-extrabold text-white md:text-2xl">
              {" "}
              conexiones valiosas.
            </span>
          </p>
        </div>

        <Ripples
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-once="true"
          color="white"
          className=" mt-4 rounded-2xl   bg-primary p-5 text-white  transition-all hover:scale-110"
        >
          <button className="md:w-[250px]">¿Quieres ser expositor?</button>
        </Ripples>
      </div>
    </section>
  );
};

export default Home;
