import NavLink from "./navLink";

const Nav=()=>{
return (
  <nav className="flex justify-between mt-8 pt-6">
    <div>
      <h1 className=" font-bold tracking-wider">
        Monie<span className="font-thin">point</span> MFB
      </h1>
    </div>
    <div className="w-5/12 md:flex flex-3 justify-between cursor-pointer">
      <NavLink name="Home" />
      <NavLink name="Payments" />
      <NavLink name="Loans" />
      <NavLink name="Manage" />
      <NavLink name="Protect" />
    </div> 
    <div className="hidden md:block">
      <button className="mx-1 bg-[#065AC8] md:rounded p-2 px-2/3 py-2/3">
        Contact Us
      </button>
      <button className=" bg-gray-500 md:rounded p-2 px2/3 py-2/3">
        Get Started
      </button>
    </div>
  </nav>
);
};

export default Nav;