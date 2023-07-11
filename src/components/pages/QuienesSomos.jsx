import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
const QuienesSomos = ({ paddingTop, title, id }) => {
  return (
    <div>
      <section className={`mt-[20px]  ${paddingTop}`} id={id}>
        <Fade triggerOnce delay={3000}>
          <>
            {title}
            <div className="flex justify-center">
              <p className="w-[800px] text-center">
                En DICREA, nos enorgullece ser una empresa dedicada al diseño y
                marketing digital, con una especialización destacada en el
                sector inmobiliario. Nuestra pasión por la creatividad y la
                tecnología nos impulsa a ofrecer soluciones innovadoras y
                efectivas que ayuden a nuestros clientes a destacarse en un
                mercado cada vez más competitivo.
              </p>
              <div className="flex"></div>
            </div>
          </>
        </Fade>
      </section>
    </div>
  );
};

export default QuienesSomos;
