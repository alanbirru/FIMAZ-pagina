import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  const navItems = [
    { title: "Inicio" },
    { title: "Servicios" },
    { title: "Precios" },
    { title: "Contacto" },
  ];

  return (
    <div className=" flex min-h-[100vh] flex-col">
      <NavBar navItem={navItems} />
      <Home />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
