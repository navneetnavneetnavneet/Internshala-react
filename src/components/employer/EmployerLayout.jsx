import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const EmployerLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default EmployerLayout;
