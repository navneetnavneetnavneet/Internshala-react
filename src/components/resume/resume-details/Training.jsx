import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncDeleteCourse } from "../../../store/actions/studentActions";

const Training = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseDeleteHandler = (id) => {
    dispatch(asyncDeleteCourse(id));
    navigate("/student/resume");
  };

  return (
    <div className="w-full border-b py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">
        Training/Courses
      </h4>
      <div className="w-[75%]">
        <div>
          <div className="w-full flex justify-between flex-col">
            {props.courses &&
              props.courses.map((course) => (
                <div
                  key={course.id}
                  className="w-full mb-5 flex items-start justify-between"
                >
                  <div className="">
                    <h4 className="font-semibold">{course.program}</h4>
                    <p className="text-zinc-600">
                      {course.organization}, {course.location}
                    </p>
                    <p className="text-zinc-600">
                      {course.startDate}-{course.endDate}
                    </p>
                    <p className="text-zinc-600">{course.description}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Link to={`/student/resume/edit_training/${course.id}`}>
                      <i class="ri-pencil-line text-[1.4rem]"></i>
                    </Link>
                    <i
                      onClick={() => courseDeleteHandler(course.id)}
                      class="ri-delete-bin-line text-[1.4rem]"
                    ></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Link
          to="/student/resume/training"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i class="ri-add-line text-[1.4rem]"></i> Add training/ course
        </Link>
      </div>
    </div>
  );
};

export default Training;
