import NavLink from "./navLink";
import { FaBars } from "react-icons/fa";

const Nav=()=>{
return (
  <nav className="flex justify-between mt-8 pt-6">
    <div>
      <h1 className=" font-bold tracking-wider">
        Monie<span className="font-thin">point</span> MFB
      </h1>
    </div>
    <div className="md:flex justify-between md:flex-grow cursor-pointer md:px-36">
      <NavLink name="Home" />
      <NavLink name="Payments" />
      <NavLink name="Loans" />
      <NavLink name="Manage" />
      <NavLink name="Protect" />
      <FaBars className=" flex mr-5 justify-end md:hidden" />
    </div>
    <div className="hidden md:block">
      <button className="mx-1 bg-slate-600 text-[#0361F0]md:rounded p-2 px-2/3 py-2/3">
        Contact Us
      </button>
      <button className=" bg-[#0763F3] text-white md:rounded p-2 px2/3 py-2/3">
        Get Started
      </button>
    </div>
  </nav>
);
};

export default Nav;