import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";

const Nav = () => {
  return (
    <div className="w-full px-[10%] bg-white flex items-center justify-between shadow relative z-[10]">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Nav;
