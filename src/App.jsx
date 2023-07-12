import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
import UpBtn from "./components/UpBtn";
function App() {
  const navItems = [
    { NavTitle: "Inicio", id: "inicio", SectionTitle: <h2>Inicio</h2> },
    {
      NavTitle: "¿Quiénes somos?",
      id: "¿quiénes somos?",
      SectionTitle: (
        <h1 className="mb-9 text-center">
          ¿Quiénes <span className=" text-primary">somos</span>?
        </h1>
      ),
    },
    {
      NavTitle: "Precios",
      id: "precios",
      SectionTitle: (
        <h1 className="mb-9 text-center">
          <span className=" text-primary">P</span>recios
        </h1>
      ),
    },
    {
      NavTitle: "Contacto",
      id: "contacto",
      SectionTitle: (
        <h1 className="mb-9 text-center underline decoration-primary decoration-[2px] underline-offset-8">
          Contacto
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
