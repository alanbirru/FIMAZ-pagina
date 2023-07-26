import DicreaLogo from "../../assets/dicrea.png";

const Nosotros = ({ paddingTop, title, id }) => {
  return (
    <div>
      <section className={` ${paddingTop}`} id={id}>
        {title}

        <div
          data-aos="fade-down"
          data-aos-duration="900"
          className="  flex flex-row-reverse flex-wrap items-center justify-center  gap-10 md:flex-row md:gap-24 "
        >
          <img className=" w-40 md:w-[350px]" src={DicreaLogo} />
          <p className=" w-[550px] text-center leading-loose  text-gray-300 md:w-[800px]">
            <span className="text-xl font-extrabold text-white md:text-2xl">
              DICREA
            </span>{" "}
            es una empresa especializada en{" "}
            <span className=" text-xl font-extrabold text-white md:text-2xl">
              diseño y marketing digital
            </span>
            , con un enfoque destacado en el
            <span className=" text-xl font-extrabold text-white md:text-2xl">
              {" "}
              sector inmobiliario{" "}
            </span>
            Su pasión por la{" "}
            <span className=" text-xl font-extrabold text-white md:text-2xl">
              creatividad y la tecnología
            </span>{" "}
            los motiva a ofrecer soluciones innovadoras y efectivas para ayudar
            a sus clientes a sobresalir en un mercado altamente competitivo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
