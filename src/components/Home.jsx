const Home = () => {
  return (
    <section
      id="Home"
      className={`h-[700px]  border-b-8 border-[orange] bg-[rgba(0,0,0,0.57)]  bg-[url("hero.jpg")] bg-cover bg-center  bg-no-repeat pt-3 bg-blend-darken md:h-[700px]`}
    >
      <div className=" flex flex-col items-center justify-center gap-2  pt-[100px] md:pt-40">
        <div className="  rounded-md bg-[#ffffff2d] p-5 backdrop-blur-md">
          <h1 className="  mb-4 text-center text-5xl text-white md:w-[600px] md:text-8xl">
            <span className="text-[orange]">FIMAZ</span> 2023
          </h1>
          <h4 className="text-center  text-white">
            Feria Inmobiliaria de Mazatlán
          </h4>
        </div>

        <div className="container mx-auto w-[90%] text-center">
          <p className="text-md text-md pt-5 text-gray-200 md:m-auto md:w-[85%] md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            labore nesciunt ea, nemo incidunt ullam architecto quod atque amet
            mollitia, quia rem consequatur odio esse culpa velit magni quos
            doloribus numquam voluptatum provident quis.
          </p>
        </div>

        <button className=" text mt-9 w-[70%]  rounded-xl bg-[orange] p-5 md:w-[250px]">
          lorem ipsum
        </button>
      </div>
    </section>
  );
};

export default Home;
