import LOGO from "../../assets/LOGO.png";
import { useState, useEffect } from "react";

import Hamburger from "./Hamburger";
import NavItemContainer from "./NavItemContainer";

let threshold;

const NavBar = ({ navItems }) => {
  // start hamburger variables

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleHamburgerClick = () => {
    setOpen(!open);
    console.log(open);
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute("id");
          setActiveSection(section);
          console.log("es visible");
          console.log(activeSection);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1.0], // Adjust this threshold as needed
    });

    // Observe each section element
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  // start nav items varibales
  return (
    <nav id="Navbar" className="fixed left-0 top-0 z-10 w-full shadow-md">
      <div className="items-center justify-between bg-white px-7 md:flex md:px-10">
        <div>
          <img className="w-24 p-2 md:w-28" src={LOGO}></img>
        </div>

        <Hamburger IsOpen={open} onClick={handleHamburgerClick} />
        <NavItemContainer
          IsOpen={open}
          navItems={navItems}
          closeHam={setOpen}
          activeSection={activeSection}
        />
      </div>
    </nav>
  );
};
export default NavBar;
