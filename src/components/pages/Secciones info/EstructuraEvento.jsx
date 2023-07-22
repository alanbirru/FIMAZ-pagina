const EstructuraEvento = ({ imagenes }) => {
  const listImage = imagenes.map((item) => {
    return (
      <a key={item.imagen} href={item.imagen}>
        <img className={item.estilo} src={item.imagen} alt="imagen" />
      </a>
    );
  });
  return (
    <div
      className="flex flex-col justify-center rounded-xl p-8  shadow-md"
      data-aos="zoom-out-down "
      data-aos-duration="2000"
    >
      <h3 className="mb-14 text-center ">
        Estructura del <span className="text-primary">evento</span>
      </h3>

      <div className="mb-14  flex flex-wrap items-center justify-center gap-10">
        {listImage}
      </div>
    </div>
  );
};

export default EstructuraEvento;
