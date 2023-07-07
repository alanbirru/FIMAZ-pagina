import { Link } from "react-scroll";

const NavItem = ({ title, closeHam, id, activeSelection }) => {
  return (
    <div>
      <Link activeClass="active" smooth spy to={id}>
        <li
          onClick={() => {
            closeHam(false);
          }}
          // onClick={() => setOpen(false)}
          className={`@apply  cursor-pointer border-b-[3px] border-gray-400  py-5 pl-6 text-lg transition-all delay-75 ease-in hover:text-primary md:my-0 md:ml-4 md:w-auto  md:px-4 md:py-7 md:text-gray-700    ${
            id === activeSelection
              ? " text-primary md:border-gray-800 md:bg-primary md:text-white md:hover:text-white"
              : "text-white md:border-white "
          }`}
        >
          {title}
        </li>
      </Link>
    </div>
  );
};

export default NavItem;
