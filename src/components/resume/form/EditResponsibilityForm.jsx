import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncEditResponsibilty } from "../../../store/actions/studentActions";

const EditResponsibilityForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  const {student} = useSelector((state) => state.studentReducer);
  const responsibility = student && student.resume.responsibilities.find((i) => i.id == id);

  const [description, setDescription] = useState(responsibility.description);

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitResponsibilityFormHandler = (e) => {
    e.preventDefault();

    const responsibility = {
      description,
    };
    dispatch(asyncEditResponsibilty(id, responsibility));
    navigate("/student/resume");
  };

  return (
    <div className="w-1/2 rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditResponsibilityForm;
