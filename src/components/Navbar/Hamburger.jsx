import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const Hamburger = ({ open, onClick }) => {
  return (
    <span onClick={onClick}>
      <FiMenu
        className={`@apply duration-[1s]; absolute right-4 top-5 cursor-pointer text-2xl text-gray-700 transition-opacity md:hidden  ${
          !open ? " opacity-100" : "opacity-0"
        } transition ease-out `}
      />

      <IoIosClose
        className={`@apply duration-[1s]; absolute right-1 top-2 cursor-pointer text-5xl text-gray-700 transition-opacity md:hidden ${
          open ? " text-red-500 opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
};
export default Hamburger;
