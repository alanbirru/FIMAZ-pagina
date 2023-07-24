import DicreaLogo from "../../assets/dicrea.png";

const Nosotros = ({ paddingTop, title, id }) => {
  return (
    <div>
      <section className={` ${paddingTop}`} id={id}>
        {title}
        <div className="  flex flex-row-reverse flex-wrap items-center justify-center  gap-10 md:flex-row md:gap-24 ">
          <p className=" w-[550px] text-center  leading-loose text-gray-300">
            <span className="font-extrabold text-white">DICREA</span> es una
            empresa especializada en{" "}
            <span className=" font-extrabold text-white">
              diseño y marketing digital
            </span>
            , con un enfoque destacado en el
            <span className=" font-extrabold text-white">
              {" "}
              sector inmobiliario
            </span>
            . Su pasión por la creatividad y la tecnología los motiva a ofrecer
            soluciones innovadoras y efectivas para ayudar a sus clientes a
            sobresalir en un mercado altamente competitivo.
          </p>
          <img className=" w-40 md:w-[350px]" src={DicreaLogo} />
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
