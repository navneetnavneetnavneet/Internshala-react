import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncDeleteAccomplishment } from "../../../store/actions/studentActions";

const Accomplishment = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccomplishmentHandler = (id) => {
    dispatch(asyncDeleteAccomplishment(id));
    navigate("/student/resume");
  };

  return (
    <div className="w-full py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">
        ACCOMPLISHMENTS/ ADDITIONAL DETAILS
      </h4>
      <div className="w-[75%]">
        <div>
          {props.accomplishments &&
            props.accomplishments.map((accomplishment) => (
              <div
                key={accomplishment.id}
                className="w-full mb-5 flex justify-between items-start"
              >
                <p className="text-zinc-600">{accomplishment.accomplishment}</p>
                <div className="flex items-center gap-5">
                  <Link
                    to={`/student/resume/edit_accomplishment/${accomplishment.id}`}
                  >
                    <i class="ri-pencil-line text-[1.4rem]"></i>
                  </Link>
                  <i
                    onClick={() =>
                      deleteAccomplishmentHandler(accomplishment.id)
                    }
                    class="ri-delete-bin-line text-[1.4rem]"
                  ></i>
                </div>
              </div>
            ))}
        </div>
        <Link
          to="/student/resume/accomplishment"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i class="ri-add-line text-[1.4rem]"></i> Add accomplishment/
          additional detail
        </Link>
      </div>
    </div>
  );
};

export default Accomplishment;
