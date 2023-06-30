import LOGO from "../../assets/LOGO.png";
import { useState } from "react";
import Hamburger from "./Hamburger";
import NavItemContainer from "./NavItemContainer";
const NavBar = ({ navItem }) => {
  // start hamburger variables

  const [open, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen(!open);
    console.log(open);
  };

  // start nav items varibales
  return (
    <nav id="Navbar" className="fixed left-0 top-0 z-10 w-full shadow-md">
      <div className="items-center justify-between bg-white px-7 md:flex md:px-10">
        <div>
          <img className="w-24 p-2 md:w-28" src={LOGO}></img>
        </div>

        <Hamburger IsOpen={open} onClick={handleHamburgerClick} />
        <NavItemContainer IsOpen={open} navItem={navItem} closeHam={setOpen} />
      </div>
    </nav>
  );
};
export default NavBar;
