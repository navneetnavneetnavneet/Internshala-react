import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncDeleteInternship, asyncDeleteJob } from "../../../store/actions/studentActions";

const Work = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobDeleteHandler = (id) => {
    dispatch(asyncDeleteJob(id));
    navigate("/student/resume");
  };

  const internshipDeleteHandler = (id) => {
    dispatch(asyncDeleteInternship(id));
    navigate("/student/resume");
  };

  return (
    <div className="w-full border-b py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">
        WORK EXPERIENCE
      </h4>
      <div className="w-[75%]">
        <div>
          <div className="w-full flex justify-between items-start">
            <div className="w-full">
              {props.internship &&
                props.internship.map((internship) => (
                  <div
                    key={internship.id}
                    className="mb-5 flex items-start justify-between"
                  >
                    <div>
                      <h4 className="font-semibold">{internship.profile}</h4>
                      <p className="text-zinc-600">
                        {internship.organization}, {internship.location}
                      </p>
                      <p className="text-zinc-600">
                        Internship . {internship.startDate}-{internship.endDate}
                      </p>
                      <p className="text-zinc-600">{internship.description}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <i className="ri-pencil-line text-[1.4rem]"></i>
                      <i
                        onClick={() => internshipDeleteHandler(internship.id)}
                        className="ri-delete-bin-line text-[1.4rem]"
                      ></i>
                    </div>
                  </div>
                ))}
              {props.jobs &&
                props.jobs.map((job) => (
                  <div
                    key={job.id}
                    className="mb-5 flex items-start justify-between"
                  >
                    <div>
                      <h4 className="font-semibold">{job.designation}</h4>
                      <p className="text-zinc-600">
                        {job.organization}, {job.location}
                      </p>
                      <p className="text-zinc-600">
                        Job . {job.startDate}-{job.endDate}
                      </p>
                      <p className="text-zinc-600">{job.description}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <i className="ri-pencil-line text-[1.4rem]"></i>
                      <i
                        onClick={() => jobDeleteHandler(job.id)}
                        className="ri-delete-bin-line text-[1.4rem]"
                      ></i>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to="/student/resume/job"
            className="text-[#00A5EC] mt-2 flex items-center gap-1"
          >
            <i class="ri-add-line text-[1.4rem]"></i> Add job
          </Link>
          <Link
            to="/student/resume/internship"
            className="text-[#00A5EC] mt-2 flex items-center gap-1"
          >
            <i class="ri-add-line text-[1.4rem]"></i> Add internship
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
