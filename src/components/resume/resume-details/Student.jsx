import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Student = () => {

  const {student} = useSelector((state) => state.studentReducer);
  const fullName = student && Array.of(student.firstName, student.lastName).join(" ");

  return (
    <div className="text-zinc-600">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <h1 className="text-[2vw] font-semibold">{fullName}</h1>
          <Link to="/student/resume/personal_details">
            <i className="ri-pencil-line text-[1.4rem]"></i>
          </Link>
        </div>
        <Link className="flex items-center gap-2 text-[#00A5EC] font-semibold">
          <i className="ri-download-2-line"></i>
          Download
        </Link>
      </div>
      <p>{student.email}</p>
      <p>{student.contact}</p>
      <p>{student.city}</p>
    </div>
  );
};

export default Student;
