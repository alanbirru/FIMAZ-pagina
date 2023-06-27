import LOGO from "../assets/LOGO.png";
import { useState } from "react";

import Hamburger from "./Hamburger";

const NavBar = () => {
  const navItems = ["Inicio", "Servicios", "Precios", "Contacto"];

  const [open, setOpen] = useState(false);
  const handleHamburgerClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const listNavItems = navItems.map((item) => {
    return (
      <li className="@apply my-5 w-0 cursor-pointer border-b-[3px] border-white pl-6  text-lg text-gray-700 transition-all delay-75 ease-in hover:text-[orange] md:my-0 md:ml-4 md:w-auto md:px-4 md:py-7 md:hover:border-b-[3px] md:hover:border-black md:hover:bg-[orange] md:hover:text-white">
        {item}
      </li>
    );
  });

  return (
    <nav id="Navbar" className="fixed left-0 top-0 w-full shadow-md">
      <div className="items-center justify-between bg-white px-7 md:flex md:px-10">
        <div>
          <img className="w-24 p-2 md:w-28" src={LOGO}></img>
        </div>

        <Hamburger open={open} onClick={handleHamburgerClick} />

        <ul
          className={`absolute left-0 z-[-1] w-full bg-white shadow-md transition-all duration-200 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 md:shadow-none`}
        >
          {listNavItems}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
