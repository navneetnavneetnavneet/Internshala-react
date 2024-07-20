import React from "react";
import CenterDiv from "./CenterDiv";
import CourseDetails from "./CourseDetails";
import { useSelector } from "react-redux";

const Application = () => {
  const { student } = useSelector((state) => state.studentReducer);
  return (
    student && (
      <div className="w-full min-h-screen px-[10%]">
        <CenterDiv firstName={student.firstName} />
        <CourseDetails />
      </div>
    )
  );
};

export default Application;
