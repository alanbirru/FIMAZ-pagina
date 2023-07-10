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
        showButton ? " visible opacity-100 " : " invisible opacity-0"
      } fixed  bottom-7 right-7 rounded-xl bg-primary  p-3 text-white transition-all`}
    >
      <TiArrowUpThick className=" text-lg md:text-3xl" />
    </button>
  );
};

export default UpBtn;
