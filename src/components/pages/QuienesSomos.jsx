import DicreaLogo from "../../assets/dicrea.png";

const QuienesSomos = ({ paddingTop, title, id }) => {
  return (
    <div>
      <section className={`mt-[20px]  ${paddingTop}`} id={id}>
        {title}
        <div className="  flex flex-wrap items-center justify-center gap-14 ">
          <img className=" w-36 md:w-[350px]" src={DicreaLogo} />

          <p className="font-weight: 900; w-[800px] text-center text-white">
            En DICREA, nos enorgullece ser una empresa dedicada al diseño y
            marketing digital, con una especialización destacada en el sector
            inmobiliario. Nuestra pasión por la creatividad y la tecnología nos
            impulsa a ofrecer soluciones innovadoras y efectivas que ayuden a
            nuestros clientes a destacarse en un mercado cada vez más
            competitivo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
