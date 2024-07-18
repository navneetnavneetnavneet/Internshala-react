import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EducationDetails = () => {
  const navigate = useNavigate();

  const closeFormHandler = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center pt-5">
      <div className="w-2/5 h-fit rounded-xl bg-white px-5 py-5">
        <i
          onClick={closeFormHandler}
          className="ri-close-line text-[1.4rem] text-end block"
        ></i>
        <Link
          to="/student/resume/education/graduation"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i className="ri-add-line text-[1.4rem]"></i> Add graduation/ Post
          graduation
        </Link>
        <Link
          to="/student/resume/education/senior_secondary"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i className="ri-add-line text-[1.4rem]"></i> Add Senior Secondary
          (XII)
        </Link>
        <Link
          to="/student/resume/education/secondary"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i className="ri-add-line text-[1.4rem]"></i> Add Secondary (X)
        </Link>
        <Link
          to="/student/resume/education/diploma"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i className="ri-add-line text-[1.4rem]"></i> Add Diploma
        </Link>
        <Link
          to="/student/resume/education/phd"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i className="ri-add-line text-[1.4rem]"></i> Add PhD
        </Link>
      </div>
    </div>
  );
};

export default EducationDetails;
