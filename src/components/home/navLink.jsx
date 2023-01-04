const NavLink = ({ name }) => {
  return (
    <span className="hover:text-blue-500 font-semibold hidden lg:flex">
      {name}
    </span>
  );
};

export default NavLink;
