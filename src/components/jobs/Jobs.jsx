import React from "react";
import Job from "./Job";
import Nav from "../student/dashboard/Nav";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Jobs = () => {
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="w-full h-[15vh] bg-[#AD2FDA] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Ab naukree ki tension ko bolo bye!
        </h1>
        <h3 className="text-sm mt-2 font-semibold">
          Find jobs with salaries up to ₹30 LPA
        </h3>
      </div>
      <div className="w-full py-10 flex flex-col items-center">
        <div className="w-1/2 flex text-zinc-600 gap-2 items-center mb-5">
          <Link to="/student/dashboard">Home</Link>
          <i className="ri-arrow-right-s-line text-lg"></i>
          <Link to="/jobs">Jobs</Link>
        </div>
        <h1 className="text-xl font-semibold">1682 Jobs</h1>
        <p className="text-xs my-5">
        Search and Apply to Latest Job Vacancies & Openings in India
        </p>
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
