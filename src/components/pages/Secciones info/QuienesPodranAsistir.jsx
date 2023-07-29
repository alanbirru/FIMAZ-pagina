import crowd from "../../../assets/crowd.png";

const QuienesPodranAsistir = ({ invitados }) => {
  const invitadosList = invitados.map((invitado) => {
    return (
      <li
        key={invitado}
        className=" my-2 list-disc font-bold marker:text-primary "
      >
        {invitado}
      </li>
    );
  });
  return (
    <div
      className="mb-5 flex flex-col justify-center rounded-xl p-8  shadow-lg"
      data-aos="zoom-out-down "
      data-aos-duration="2000"
    >
      <h3 className="mb-5 text-center ">
        ¿Quienes podrán <span className="text-primary">asistir</span>?
      </h3>
      <div className="flex flex-wrap items-center  justify-center gap-10">
        <div className=" flex gap-4">
          <ul className="text-left">{invitadosList}</ul>
        </div>
        <img src={crowd} className=" w-[300px]"></img>
      </div>
    </div>
  );
};

export default QuienesPodranAsistir;
