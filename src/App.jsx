import NavBar from "./components/Navbar/NavBar";
import Home from "./components/pages/Home";
function App() {
  const navItems = ["Inicio", "Servicios", "Precios", "Contacto"];
  return (
    <div>
      <NavBar navItems={navItems} />
      <Home />
      <div className="container mx-auto"></div>
    </div>
  );
}
export default App;
