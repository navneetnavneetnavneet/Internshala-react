import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { asyncDeleteResponsibilty } from "../../../store/actions/studentActions";
import { useDispatch } from "react-redux";

const Responsibility = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteResponsibilityHandler = (id) => {
    dispatch(asyncDeleteResponsibilty(id));
    navigate("/student/resume");
  };

  return (
    <div className="w-full border-b py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">
        Position of Responsibility
      </h4>
      <div className="w-[75%]">
        <div>
          <div className="w-full flex justify-between flex-col">
            {props.responsibilities &&
              props.responsibilities.map((responsibility) => (
                <div
                  key={responsibility.id}
                  className="w-full mb-5 flex items-start justify-between"
                >
                  <h4 className="text-zinc-600">
                    {responsibility.description}
                  </h4>
                  <div className="flex items-center gap-5">
                    <i class="ri-pencil-line text-[1.4rem]"></i>
                    <i
                      onClick={() =>
                        deleteResponsibilityHandler(responsibility.id)
                      }
                      class="ri-delete-bin-line text-[1.4rem]"
                    ></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Link
          to="/student/resume/responsibility"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i class="ri-add-line text-[1.4rem]"></i> Add position of
          responsibility
        </Link>
      </div>
    </div>
  );
};

export default Responsibility;
