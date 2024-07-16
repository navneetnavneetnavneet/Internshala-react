import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const { pathname } = useLocation();

  const {student} = useSelector((state) => state.studentReducer);

  return (
    <div className="w-full px-[10%] bg-white flex items-center justify-between shadow relative z-[10]">
      <NavLeft />
      {pathname == "/student/signup" ||
      pathname == "/student/signin" ||
      pathname == "/employer/signin" ? (
        ""
      ) : (
        <NavRight student={student} />
      )}
    </div>
  );
};

export default Nav;
