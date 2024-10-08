import React from "react";
import { Link } from "react-router-dom";

const Internship = () => {
  return (
    <Link
      to="/internship/details/internship_name"
      className="w-1/2 h-36 mb-5 border rounded-xl px-4 py-4 hover:scale-[1.02] duration-300"
    >
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold">Full Stack Development</h1>
          <h2 className="text-base font-semibold text-zinc-600">
            Alkraj Developers Private Limited
          </h2>
        </div>
        <img
          className="w-16 h-16 object-contain"
          src="https://internshala-uploads.internshala.com/logo%2F5e2fde677c3fc1580195431.png.webp"
          alt=""
        />
      </div>
      <div className="flex items-center gap-10 text-sm text-zinc-600">
        <span className="flex items-center gap-2">
          <i className="ri-home-5-line"></i>
          <p>Work from home</p>
        </span>
        <span className="flex items-center gap-2">
          <i className="ri-arrow-right-circle-line"></i>
          <p>14th octpber '24 - 22th November '24</p>
        </span>
        <span className="flex items-center gap-2">
          <i className="ri-calendar-line"></i>
          <p>6 weeks</p>
        </span>
      </div>
    </Link>
  );
};

export default Internship;
