const Home = () => {
  return (
    <section
      className={`h-[750px] bg-[rgba(0,0,0,0.54)] bg-[url("hero.jpg")] bg-cover  bg-center bg-no-repeat pt-3  bg-blend-darken md:h-[1000px]`}
      id="Home"
    >
      <div className=" flex flex-col items-center justify-center gap-2    pt-60">
        <div className="  rounded-md bg-[#ffffff2d] p-5 backdrop-blur-md">
          <h1 className="  mb-4 text-center text-5xl text-white md:w-[600px] md:text-8xl">
            <span className="text-[orange]">FIMAZ</span> 2023
          </h1>
          <h4 className="text-center  text-white">
            Feria Inmobiliaria de mazatlan
          </h4>
        </div>

        <div className="container mx-auto text-center">
          <p className="text-md pt-5 text-white md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            labore nesciunt ea, nemo incidunt ullam architecto quod atque amet
            mollitia, quia rem consequatur odio esse culpa velit magni quos
            doloribus numquam voluptatum provident quis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
