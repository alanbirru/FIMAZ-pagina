import { Link } from "react-scroll";

const NavItem = ({ title, closeHam }) => {
  return (
    <div>
      <Link activeClass="active" smooth spy to={title}>
        <li
          onClick={() => {
            closeHam(false);
          }}
          // onClick={() => setOpen(false)}
          className="@apply cursor-pointer border-b-[1.5px] border-gray-400 py-5 pl-6 text-lg  text-white transition-all delay-75 ease-in hover:text-[orange] md:my-0 md:ml-4 md:w-auto md:border-b-[3px] md:border-white md:px-4 md:py-7 md:text-gray-700 md:hover:border-b-[3px] md:hover:border-gray-800 md:hover:bg-[orange] md:hover:text-white"
        >
          {title}
        </li>
      </Link>
    </div>
  );
};

export default NavItem;
