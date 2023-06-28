const Home = () => {
  return (
    <section
      className={`h-[800px] bg-[rgba(0,0,0,0.482)] bg-[url("hero.jpg")] bg-cover  bg-center bg-no-repeat pt-3  bg-blend-darken md:h-[1000px]`}
      id="Home"
    >
      <div className="flex flex-col">
        <h1 className="text-white">Lorem ipsum dolor sit amet.</h1>
        <h2 className="text-white">Lorem ipsum dolor sit amet.</h2>
        <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
        <h4 className="text-white">Lorem ipsum dolor sit amet.</h4>
      </div>
    </section>
  );
};

export default Home;
