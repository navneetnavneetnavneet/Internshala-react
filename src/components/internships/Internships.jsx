import React from "react";
import Nav from "../student/dashboard/Nav";
import Footer from "../footer/Footer";
import Internship from "./Internship";

const Internships = () => {
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="w-full py-10 flex flex-col items-center">
        <h1 className="text-xl font-semibold">437 Total Internships</h1>
        <p className="text-xs my-5">Latest Summer Internships</p>
        <Internship />
        <Internship />
        <Internship />
      </div>
      <Footer />
    </div>
  );
};

export default Internships;
