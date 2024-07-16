import React from "react";
import Back from "./Back";
import ResumeDetails from "./resume-details/ResumeDetails";
import { useSelector } from "react-redux";

const Resume = () => {
  const { student } = useSelector((state) => state.studentReducer);
  return (
    student && (
      <div className="w-full min-h-screen px-[10%] py-10">
        <Back />
        <h1 className="text-center text-[2vw] my-5 font-semibold text-zinc-600">
          Resume
        </h1>
        <ResumeDetails student={student} />
      </div>
    )
  );
};

export default Resume;
