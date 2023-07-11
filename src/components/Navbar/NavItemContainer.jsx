import NavItem from "./NavItem";

const NavItemContainer = ({ IsOpen, navItems, closeHam, activeSection }) => {
  const listNavItems = navItems.map((item) => {
    return (
      <NavItem
        title={item.NavTitle}
        closeHam={closeHam}
        id={item.id}
        activeSelection={activeSection}
        key={item.id}
      />
    );
  });

  return (
    <ul
      className={`absolute left-0 right-0  z-[-10] mx-auto w-80  bg-gray-900 shadow-xl transition-all duration-700 ease-in-out md:static md:z-auto md:m-0 md:flex md:w-auto md:items-center md:bg-white md:pb-0 md:pl-0 md:shadow-none${
        IsOpen ? " top-16" : " top-[-490px]  md:opacity-100"
      }`}
    >
      {listNavItems}
    </ul>
  );
};

export default NavItemContainer;
