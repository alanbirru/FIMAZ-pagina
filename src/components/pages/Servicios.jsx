import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
const Servicios = ({ paddingTop, title, id }) => {
  return (
    <section className={`mt-[50px]  ${paddingTop}`} id={id}>
      <Reveal triggerOnce>
        <>
          {title}
          <div className="flex justify-center">
            <p className="w-[1000px] text-center">
              Somos una empresa dentro de un consorcio dedicada a la publicidad
              digital, especializada en las redes sociales en el ámbito
              inmobiliario, donde nuestros principales proyectos son
              inmobiliarios como: Monarca Residencial, Las Primaveras, Hacienda
              Los Girasoles, 3 Puntos de Fuga, VATA Desarrollos Inmobiliarios,
              OCAR Arrendamientos, Sikada La Bloquera y próximamente Infinity
              View.
            </p>
            <div className="flex"></div>
          </div>
        </>
      </Reveal>
    </section>
  );
};

export default Servicios;
