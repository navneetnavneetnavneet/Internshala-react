import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncAddResponsibilty } from "../../../store/actions/studentActions";

const ResponsibilityForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitResponsibilityFormHandler = (e) => {
    e.preventDefault();

    const responsibility = {
      description,
    };
    dispatch(asyncAddResponsibilty(responsibility));
    navigate("/student/resume");
  };

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,.3)] z-[100] absolute top-0 left-1/2 -translate-x-1/2">
      <div className="w-1/2 bg-white rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
        <i
          onClick={closeFormHandler}
          className="ri-close-line text-[1.4rem] text-end block"
        ></i>
        <h1 className="text-xl font-semibold text-center">
          Position of responsibility
        </h1>
        <form
          onSubmit={submitResponsibilityFormHandler}
          className="w-full mt-5 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="description" className="font-semibold">
              Description (optional)
            </label>
            <p className="font-semibold opacity-50">
              If you have been/are an active part of societies, conducted any
              events or led a team, add details here
            </p>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              id="description"
              placeholder="e.g. Led a team of 5 volunteers to plan and conduct activities for literary in collage fest"
              className="w-full h-[20vh] resize-none px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            ></textarea>
          </div>
          <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResponsibilityForm;
