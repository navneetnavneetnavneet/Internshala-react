import React from "react";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <Link
      to="/job/details/jobname"
      className="w-1/2 h-36 mb-5 border rounded-xl px-4 py-4 hover:scale-[1.02] duration-300"
    >
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold">
            Business Development Associate
          </h1>
          <h2 className="text-base font-semibold text-zinc-600">Bussiness</h2>
        </div>
        <img
          className="w-16 h-16 object-cover"
          src="https://internshala.com/static/images/search/placeholder_logo.svg"
          alt=""
        />
      </div>
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2">
          <i className="ri-map-pin-line"></i>
          <p>location</p>
        </span>
        <span className="flex items-center gap-2">
          <i className="ri-briefcase-3-line"></i> <p>0-2 years</p>
        </span>
        <span className="flex items-center gap-2">
          <i>₹</i>
          <p>6,00,000-8,00,000</p>
        </span>
      </div>
    </Link>
  );
};

export default Job;
