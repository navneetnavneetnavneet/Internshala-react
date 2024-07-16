import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncDeleteProject } from "../../../store/actions/studentActions";

const Project = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteProjectHandler = (id) => {
    dispatch(asyncDeleteProject(id));
    navigate("/student/resume");
  };

  return (
    <div className="w-full border-b py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">
        Academics/ Personal Project
      </h4>
      <div className="w-[75%]">
        <div>
          {props.projects &&
            props.projects.map((project) => (
              <div
                key={project.id}
                className="w-full flex justify-between items-start"
              >
                <div>
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-zinc-600">
                    {project.startDate} - {project.endDate}
                  </p>
                  <p className="text-zinc-600">{project.description}</p>
                </div>
                <div className="flex items-center gap-5">
                  <Link to={`/student/resume/edit_project/${project.id}`}>
                    <i class="ri-pencil-line text-[1.4rem]"></i>
                  </Link>
                  <i
                    onClick={() => deleteProjectHandler(project.id)}
                    class="ri-delete-bin-line text-[1.4rem]"
                  ></i>
                </div>
              </div>
            ))}
        </div>
        <Link
          to="/student/resume/project"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i class="ri-add-line text-[1.4rem]"></i> Add academic/ personal
          project
        </Link>
      </div>
    </div>
  );
};

export default Project;
