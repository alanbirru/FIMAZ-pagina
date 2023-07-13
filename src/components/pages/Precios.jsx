const Precios = ({ paddingTop, title, id }) => {
  return (
    <section className={`${paddingTop} `} id={id}>
      <>
        {title}
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-center">
              ¿<span className=" text-primary">Dónde</span> se llevara acabo?
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-center">
              ¿Cuando <span className="text-primary">será</span>?
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-center">
              ¿Como será <span className="text-primary">acceso</span>?
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-center">
              ¿Quienes podrán <span className="text-primary">asistir</span>?
            </h2>
          </div>
        </div>
      </>
    </section>
  );
};

export default Precios;
