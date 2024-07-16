import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditAdditionalForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accomplishment, setAccomplishment] = useState("");

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitAccomplishmentFormHandler = (e) => {
    e.preventDefault();

    const additionalDetails = {
      accomplishment,
    };
    dispatch();
    navigate("/student/resume");
  };

  return (
    <div className="w-1/2 rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
      <i
        onClick={closeFormHandler}
        className="ri-close-line text-[1.4rem] text-end block"
      ></i>
      <h1 className="text-xl font-semibold text-center">Additional details</h1>
      <form
        onSubmit={submitAccomplishmentFormHandler}
        className="w-full mt-5 flex flex-col gap-5"
      >
        <div>
          <label htmlFor="description" className="font-semibold">
            Add your accomplishments such as rewards, recognitions, test scores,
            certifications, etc. here. You may also add information such as
            seminars/workshops you have attended or any interests/hobbies you
            have pursued.
          </label>
          <textarea
            onChange={(e) => setAccomplishment(e.target.value)}
            value={accomplishment}
            type="text"
            id="description"
            placeholder="E.g. Secured 1st rank among 500 entries in national level story writing compition organised by internshala."
            className="w-full h-[20vh] resize-none px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          ></textarea>
        </div>
        <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditAdditionalForm;
