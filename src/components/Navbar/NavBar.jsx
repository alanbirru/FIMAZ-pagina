import LOGO from "../../assets/LOGO.png";
import { useState, useEffect } from "react";

import Hamburger from "./Hamburger";
import NavItemContainer from "./NavItemContainer";

const NavBar = ({ navItems }) => {
  // start hamburger variables

  const [open, setOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleHamburgerClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          setActiveNavItem(item.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // start nav items varibales
  return (
    <nav
      id="Navbar"
      className="fixed left-0 top-0 z-10 w-full   shadow-md md:p-0"
    >
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:p-0 md:px-10">
        <div>
          <img
            className=" w-28 p-2 transition-all hover:rotate-[-3deg] hover:scale-105 md:w-36 "
            src={LOGO}
          ></img>
        </div>

        <Hamburger IsOpen={open} onClick={handleHamburgerClick} />
        <NavItemContainer
          IsOpen={open}
          navItems={navItems}
          closeHam={setOpen}
          activeSection={activeNavItem}
        />
      </div>
    </nav>
  );
};
export default NavBar;
