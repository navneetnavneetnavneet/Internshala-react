import React from "react";
import { Link } from "react-router-dom";

const Course = ({course}) => {
  return (
    <div className="w-[24%] rounded shadow mt-20 overflow-hidden flex flex-col items-center p-5">
      <img
        src={course.image}
        alt=""
      />
      <h1 className="text-lg font-semibold mt-3">{course.title}</h1>
      <p className="text-zinc-600 text-center tracking-tight">{course.details}</p>
      <div className="flex items-center justify-between w-full mt-10">
        <p className="text-xs text-zinc-600">
          Duration: <span className="text-sm font-semibold">{course.duration} weeks</span>
        </p>
        <div className="flex items-center gap-1 text-[#00A5EC]">
          <Link className="text-sm font-semibold">Know More</Link>
          <i className="ri-arrow-right-s-line text-[1.4rem]"></i>
        </div>
      </div>
    </div>
  );
};

export default Course;
