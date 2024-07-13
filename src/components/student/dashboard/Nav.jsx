import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full px-[10%] bg-white flex items-center justify-between shadow relative z-[10]">
      <NavLeft />
      {pathname == "/student/signup" ||
      pathname == "/student/signin" ||
      pathname == "/employer/signin" ? (
        ""
      ) : (
        <NavRight />
      )}
    </div>
  );
};

export default Nav;
