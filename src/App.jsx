import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  const navItems = [
    { title: "Inicio", id: "inicio" },
    { title: "Servicios", id: "servicios" },
    { title: "Precios", id: "precios" },
    { title: "Contacto", id: "contacto" },
  ];

  return (
    <div className=" flex min-h-[100vh] flex-col">
      <NavBar navItems={navItems} />
      <Home />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
