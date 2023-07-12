import React from "react";
import { useState, useEffect } from "react";
import { TiArrowUpThick } from "react-icons/ti";
const UpBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={` ${
        showButton ? "visible opacity-100" : "invisible opacity-0"
      } fixed bottom-4 right-4 rounded-xl border-4  border-gray-600 bg-gradient-to-r from-orange-500 to-orange-400 p-3 text-white transition-all duration-300`}
    >
      <TiArrowUpThick className=" text-lg md:text-3xl" />
    </button>
  );
};

export default UpBtn;
