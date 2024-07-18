import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncDeleteGraduation } from "../../../store/actions/studentActions";

const Education = (props) => {
  const dispatch = useDispatch();

  const deleteEducationHandler = (id) => {
    dispatch(asyncDeleteGraduation(id));
    navigate("/student/resume");
  };

  return (
    <div className="w-full border-t border-b mt-5 py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">Education</h4>
      <div className="w-[75%]">
        <div>
          {props.education &&
            props.education.map((edu) => (
              <div
                key={edu.id}
                className="w-full mb-5 flex justify-between items-start"
              >
                <div className="w-full flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">
                      {edu.degree}, {edu.stream}
                    </h4>
                    <p>{edu.college}</p>
                    <p>
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Link to={`/student/resume/edit_education/${edu.id}`}>
                      <i class="ri-pencil-line text-[1.4rem]"></i>
                    </Link>
                    <i
                      onClick={() => deleteEducationHandler(edu.id)}
                      class="ri-delete-bin-line text-[1.4rem]"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Link
          to="/student/resume/education"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i class="ri-add-line text-[1.4rem]"></i> Add education
        </Link>
      </div>
    </div>
  );
};

export default Education;
