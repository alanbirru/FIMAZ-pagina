import React, { useState, useEffect } from "react";
import { TiArrowUpThick } from "react-icons/ti";

const UpBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const [isScaled, setIsScaled] = useState(false);

  const handleScroll = () => {
    const shouldShowButton = window.pageYOffset > 200;
    setShowButton(shouldShowButton);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsScaled(!isScaled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScaled) {
      const timer = setTimeout(() => {
        setIsScaled(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isScaled]);

  const buttonVisibilityClass = showButton
    ? "visible opacity-100"
    : "invisible opacity-0";
  const scalingClass = isScaled ? "scale-125  transition-all" : "";

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 right-4 rounded-xl bg-gradient-to-r  from-orange-500 to-orange-400 p-3 text-white  drop-shadow-lg transition-all duration-300 ${buttonVisibilityClass} ${scalingClass}`}
    >
      <TiArrowUpThick className="text-lg md:text-3xl" />
    </button>
  );
};

export default UpBtn;
