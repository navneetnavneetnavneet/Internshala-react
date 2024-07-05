import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 text-zinc-600 text-lg mb-5">
        <Link to="/contact">Contact</Link>
        <i className="ri-arrow-right-s-line text-[1.4rem]"></i>
        <h3>Student Help Center</h3>
      </div>
      <h1 className="text-[2vw] tracking-tight leading-none text-zinc-600 font-semibold text-center">
        Hi Username, <br />
        what can we help you with?
      </h1>
    </div>
  );
};

export default Heading;
