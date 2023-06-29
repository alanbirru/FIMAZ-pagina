import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  const navItems = ["Inicio", "Servicios", "Precios", "Contacto"];
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
