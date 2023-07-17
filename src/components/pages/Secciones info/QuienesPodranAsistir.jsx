const QuienesPodranAsistir = () => {
  return (
    <div className="mb-5 flex flex-col justify-center">
      <h3 className="mb-5 text-center  ">
        ¿Quienes podrán <span className="text-primary">asistir</span>?
      </h3>
      <div>
        <ul className="  text-left">
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Desarrollos Inmobiliarios
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Bancos
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Constructoras
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Agencias de carros
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Inmobiliarias
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Arquitectos
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Maquinaria pesada
          </li>
          <li className=" my-2 list-disc font-bold marker:text-primary">
            Material de Construcción
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuienesPodranAsistir;
