import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
import UpBtn from "./components/UpBtn";

import { TypeAnimation } from "react-type-animation";

function App() {
  const navItems = [
    { NavTitle: "Inicio", id: "inicio", SectionTitle: <h2>Inicio</h2> },
    {
      NavTitle: "Nosotros",
      id: "¿quiénes somos?",
      SectionTitle: (
        <h1 className=" mb-10 text-center text-white md:mb-20">
          ¿ <span className=" text-primary">Quiénes</span> somos?
        </h1>
      ),
    },
    {
      NavTitle: "Info",
      id: "informacion",
      SectionTitle: (
        <TypeAnimation
          sequence={["información del", , 600, "información del evento.", 900]}
          wrapper="h1"
          speed={20}
          className="relative mb-20 h-24 overflow-hidden pb-10 text-center"
          repeat={Infinity}
        />
      ),
    },
    {
      NavTitle: "Preguntas",
      id: "preguntas",
      SectionTitle: (
        <h1 className="mb-9 text-center  underline-offset-8">
          <span>P</span>reguntas
        </h1>
      ),
    },
  ];

  return (
    <div className=" flex min-h-[100vh] flex-col">
      <NavBar navItems={navItems} />
      <Home />
      <Content navItems={navItems} />
      <Footer />
      <UpBtn />
    </div>
  );
}
export default App;
