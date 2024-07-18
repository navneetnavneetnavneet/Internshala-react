import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./dashboard/Nav";
import Footer from "../footer/Footer";

const StudentLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full min-h-screen">
      {/* {pathname == "/" ? <Navbar /> : <Nav />} */}
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default StudentLayout;
