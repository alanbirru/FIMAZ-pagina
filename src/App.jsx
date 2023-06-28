import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  const navItems = ["Inicio", "Servicios", "Precios", "Contacto"];
  return (
    <div>
      <NavBar navItems={navItems} />
      <Home />
      <div className="container mx-auto"></div>
      <Footer />
    </div>
  );
}
export default App;
