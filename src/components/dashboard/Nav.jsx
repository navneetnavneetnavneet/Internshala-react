import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";

const Nav = () => {
  return (
    <div className="w-full px-[10%] flex items-center justify-between shadow relative">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Nav;
