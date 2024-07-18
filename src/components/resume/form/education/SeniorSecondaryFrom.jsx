import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncAddSeniorSecondary } from "../../../../store/actions/studentActions";

const SeniorSecondaryFrom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [complete, setCompletion] = useState("");
  const [board, setBoard] = useState("");
  const [performance, setPerformance] = useState("");
  const [stream, setStream] = useState("");
  const [school, setSchool] = useState("");

  const closeFormHandler = () => {
    navigate(-1);
  };

  const higherSecondaryHandler = (e) => {
    e.preventDefault();

    const higherSecondaryDetails = {
      complete,
      board,
      performance,
      stream,
      school,
    };
    dispatch(asyncAddSeniorSecondary(higherSecondaryDetails));
    navigate("/student/resume");
  };

  return (
    <div className="w-full min-h-screen bg-[#7F7F7F] flex py-10 justify-center">
      <div className="w-1/2 h-fit rounded-xl bg-white py-10 px-10">
        <i
          onClick={closeFormHandler}
          className="ri-close-line text-[1.4rem] text-end block"
        ></i>
        <h1 className="text-xl font-semibold text-zinc-600 text-center">
          Senior Secondary or Equivalent (XII) details
        </h1>
        <form
          onSubmit={higherSecondaryHandler}
          className="w-full mt-5 flex flex-col justify-center gap-5"
        >
          <div>
            <label htmlFor="complete" className="font-semibold">
              Year of completion
            </label>
            <input
              onChange={(e) => setCompletion(e.target.value)}
              value={complete}
              minLength={4}
              maxLength={4}
              type="number"
              id="complete"
              placeholder="Choose Year"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div>
            <label htmlFor="board" className="font-semibold">
              Board
            </label>
            <input
              onChange={(e) => setBoard(e.target.value)}
              value={board}
              type="text"
              id="board"
              placeholder="e.g. CBSE"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div className="w-full flex items-end gap-5">
            <div className="w-[30%]">
              <label htmlFor="percentage" className="font-semibold">
                Percentage Score{" "}
                <span className="text-zinc-600">(Recommended)</span>
              </label>
              <select
                onChange={(e) => setPerformance(e.target.value)}
                className="block border rounded-md outline-none px-4 py-2 mt-1"
              >
                <option value="Out Of 100">Percentage</option>
                <option value="Out Of 10">CGPA (10)</option>
                <option value="Out Of 7">CGPA (7)</option>
                <option value="Out of 5">CGPA (5)</option>
                <option value="Out of 4">CGPA (4)</option>
              </select>
            </div>
            <div className="w-[80%] px-4 py-2 border rounded-md text-zinc-600">
              <input
                value={performance || "Out of 100"}
                type="text"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="complete" className="font-semibold">
              Stream <span className="text-zinc-600">(Optional)</span>
            </label>
            <select
              onChange={(e) => setStream(e.target.value)}
              value={stream}
              className="w-full px-4 py-2 mt-1 border outline-none"
            >
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Art">Art</option>
            </select>
          </div>
          <div>
            <label htmlFor="school" className="font-semibold">
              School
            </label>
            <input
              onChange={(e) => setSchool(e.target.value)}
              value={school}
              type="text"
              id="school"
              placeholder="e.g. Delhi Public School"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeniorSecondaryFrom;
