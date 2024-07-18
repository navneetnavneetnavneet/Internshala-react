import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncAddDiploma } from "../../../../store/actions/studentActions";

const DiplomaForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [college, setCollege] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [stream, setStream] = useState("");
  const [performance, setPerformance] = useState();

  const closeFormHandler = () => {
    navigate(-1);
  };

  const diplomaSubmitHandler = (e) => {
    e.preventDefault();

    const diplomaDetails = {
      college,
      startYear,
      endYear,
      stream,
      performance,
    };
    dispatch(asyncAddDiploma(diplomaDetails));
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
          Diploma details
        </h1>
        <form
          onSubmit={diplomaSubmitHandler}
          className="w-full mt-5 flex flex-col justify-center gap-5"
        >
          <div>
            <label htmlFor="college" className="font-semibold">
              College
            </label>
            <input
              onChange={(e) => setCollege(e.target.value)}
              value={college}
              type="text"
              id="college"
              placeholder="e.g. IGNOU"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[48%]">
              <label htmlFor="start" className="font-semibold">
                Start Year
              </label>
              <input
                onChange={(e) => setStartYear(e.target.value)}
                value={startYear}
                minLength={4}
                maxLength={4}
                type="number"
                id="start"
                placeholder="Choose Year"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="end" className="font-semibold">
                End Year
              </label>
              <input
                onChange={(e) => setEndYear(e.target.value)}
                value={endYear}
                minLength={4}
                maxLength={4}
                type="number"
                id="end"
                placeholder="Choose Year"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="stream" className="font-semibold">
              Stream
            </label>
            <input
              onChange={(e) => setStream(e.target.value)}
              value={stream}
              type="text"
              id="stream"
              placeholder="e.g. Creative Writing"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div className="w-full flex items-end gap-5">
            <div className="w-[30%]">
              <label htmlFor="percentage" className="font-semibold">
                Performance Score{" "}
                <span className="text-zinc-600">(Recommended)</span>
              </label>
              <select
                onChange={(e) => setPerformance(e.target.value)}
                className="block border rounded-md outline-none px-4 py-2"
              >
                <option value="Out of 100">Percentage</option>
                <option value="Out of 10">CGPA (10)</option>
                <option value="Out of 9">CGPA (9)</option>
                <option value="Out of 8">CGPA (8)</option>
                <option value="Out of 7">CGPA (7)</option>
                <option value="Out of 6">CGPA (6)</option>
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
          <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiplomaForm;
