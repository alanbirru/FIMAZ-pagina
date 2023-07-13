import LogoFimaz from "../assets/LOGO.png";
import Ripples from "react-ripples";
const Home = () => {
  return (
    <section
      id="inicio"
      className={`h-[800px]   border-b-8 border-primary  bg-[rgba(0,0,0,0.67)] bg-[url("hero.jpg")] bg-cover  bg-fixed bg-center bg-no-repeat pt-3 bg-blend-darken md:h-[1500px]`}
    >
      <div className=" flex flex-col items-center justify-center gap-2  pt-[100px]  md:pt-[480px]">
        <div className="  rounded-[0px] bg-[white] p-6 backdrop-blur-md md:rounded-[10px]">
          <img src={LogoFimaz} />
        </div>

        <div className="container mx-auto w-[90%] text-center">
          <p className="text-md text-md pt-5 text-gray-200 md:m-auto md:w-[85%] md:text-lg ">
            FIMAZ (Feria Inmobiliaria de Mazatlán) es un evento especializado en
            el sector inmobiliario que proporciona una plataforma para que los
            profesionales y empresas del ramo exhiban sus proyectos y servicios,
            establezcan contactos, aprendan de expertos y se mantengan
            actualizados sobre las últimas tendencias del mercado. Es un lugar
            donde los interesados en la compra, venta o inversión en bienes
            raíces pueden encontrar información relevante y establecer
            conexiones valiosas
          </p>
        </div>

        {/* <button className=" text mt-9 w-[70%]  rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 p-5 text-white drop-shadow-sm transition-all hover:scale-110 md:w-[250px]">
          ¿Quieres ser expositor?
        </button> */}
        <Ripples
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
