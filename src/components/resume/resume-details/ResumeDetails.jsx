import React from "react";
import Student from "./Student";
import Education from "./Education";
import Responsibility from "./Responsibility";
import Training from "./Training";
import Project from "./Project";
import Work from "./Work";
import Accomplishment from "./Accomplishment";
import Portfolio from "./Portfolio";

const ResumeDetails = (props) => {
  
  return (
    <div className="w-5/6 border rounded-lg mx-auto">
      <p className="text-zinc-600 text-center border-b py-2 bg-[#FAFAFA] mb-10">
        This is the resume companies will see when you apply
      </p>
      <div className="px-[5%] my-10">
        <Student />
        <Education education={props.student.resume.education} />
        <Work jobs={props.student.resume.jobs} internship={props.student.resume.internships} />
        <Responsibility responsibilities={props.student.resume.responsibilities} />
        <Training courses={props.student.resume.courses} />
        <Project projects={props.student.resume.projects} />
        <Portfolio />
        <Accomplishment accomplishments={props.student.resume.accomplishments} />
      </div>
    </div>
  );
};

export default ResumeDetails;
