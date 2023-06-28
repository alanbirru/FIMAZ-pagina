import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/pages/Hero";
function App() {
  const navItems = ["Inicio", "Servicios", "Precios", "Contacto"];
  return (
    <div>
      <NavBar navItems={navItems} />
      <Hero />
      <div className="container mx-auto"></div>
    </div>
  );
}
export default App;
