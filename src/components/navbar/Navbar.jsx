import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";

const Navbar = () => {
  return (
    <div className="w-full px-[10%] flex items-center justify-between shadow">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Navbar;
