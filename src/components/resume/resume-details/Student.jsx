import React from "react";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div className="text-zinc-600">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <h1 className="text-[2vw] font-semibold">Navneetsingh Solanki</h1>
          <Link to="/student/resume/personal_details">
            <i class="ri-pencil-line text-[1.4rem]"></i>
          </Link>
        </div>
        <Link className="flex items-center gap-2 text-[#00A5EC] font-semibold">
          <i class="ri-download-2-line"></i>
          Download
        </Link>
      </div>
      <p>example@gmail.com</p>
      <p>+91 8987898754</p>
      <p>Bhopal</p>
    </div>
  );
};

export default Student;
