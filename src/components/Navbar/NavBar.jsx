import LOGO from "../../assets/LOGO.png";
import { useState } from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  // start nav items varibales
  const navItems = ["Inicio", "Servicios", "Precios", "Contacto"];
  const listNavItems = navItems.map((item, index) => {
    return (
      <li
        key={index}
        onClick={() => setOpen(false)}
        className="@apply cursor-pointer border-b-[1.5px] border-gray-400 py-5 pl-6 text-lg  text-white transition-all delay-75 ease-in hover:text-[orange] md:my-0 md:ml-4 md:w-auto md:border-b-[3px] md:border-white md:px-4 md:py-7 md:text-gray-700 md:hover:border-b-[3px] md:hover:border-gray-800 md:hover:bg-[orange] md:hover:text-white"
      >
        {item}
      </li>
    );
  });

  // start hamburger variables
  const [open, setOpen] = useState(false);
  const handleHamburgerClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <nav id="Navbar" className="fixed left-0 top-0 w-full shadow-md">
      <div className="items-center justify-between bg-white px-7 md:flex md:px-10">
        <div>
          <img className="w-24 p-2 md:w-28" src={LOGO}></img>
        </div>

        <Hamburger open={open} onClick={handleHamburgerClick} />

        <ul
          className={`absolute left-0 right-0  z-[-1] mx-auto w-80    bg-gray-800 shadow-xl transition-all duration-700 ease-in-out md:static md:z-auto md:m-0 md:flex md:w-auto md:items-center md:bg-white md:pb-0 md:pl-0 md:shadow-none  ${
            open ? " top-14" : " top-[-490px]  md:opacity-100"
          }`}
        >
          {listNavItems}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
