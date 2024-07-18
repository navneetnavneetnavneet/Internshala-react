import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncAddGraduation } from "../../../../store/actions/studentActions";

const GraduationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [college, setCollege] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [degree, setDegree] = useState("");
  const [stream, setStream] = useState("");
  const [performance, setPerformance] = useState();

  const closeFormHandler = () => {
    navigate(-1);
  };

  const graduationSubmitHandler = (e) => {
    e.preventDefault();

    const graduationDetails = {
      college,
      startYear,
      endYear,
      degree,
      stream,
      performance,
    };
    dispatch(asyncAddGraduation(graduationDetails));
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
          Graduation details/ Post graduation details
        </h1>
        <form
          onSubmit={graduationSubmitHandler}
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
              placeholder="e.g. Hindu Collage"
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
          <div className="w-full flex justify-between">
            <div className="w-[48%]">
              <label htmlFor="degree" className="font-semibold">
                Degree
              </label>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                type="text"
                id="degree"
                placeholder="e.g. B.sc"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="stream" className="font-semibold">
                Stream <span className="text-zinc-600">(Optinal)</span>
              </label>
              <input
                onChange={(e) => setStream(e.target.value)}
                value={stream}
                type="text"
                id="stream"
                placeholder="e.g. Economics"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              />
            </div>
          </div>
          <div className="w-full p-5 bg-[#F8F8F8] border rounded-md">
            <p className="text-zinc-600">
              Example: If your degree is B.Sc in Chemistry, then select Bachelor
              of Science (B.Sc) in{" "}
              <span className="text-black font-semibold">degree</span> and
              Chemistry in{" "}
              <span className="text-black font-semibold">streams</span>. <br />{" "}
              <br /> If you can't find your degree, check for typos or different
              ways of writing your degree or choose from the closest available.
              Write to{" "}
              <span className="text-[#00A5EC]">support@internshala.com</span> if
              you are pursuing a degree not available in the list.
            </p>
          </div>
          <div className="w-full flex items-end gap-5">
            <div className="w-[20%]">
              <label htmlFor="percentage" className="font-semibold">
                Performance Score{" "}
                <span className="text-zinc-600">(Recommended)</span>
              </label>
              <select
                onChange={(e) => setPerformance(e.target.value)}
                className=" block border rounded-md outline-none px-4 py-2"
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
              {performance || "Out of 100"}
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

export default GraduationForm;
