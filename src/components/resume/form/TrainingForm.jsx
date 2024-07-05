import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TrainingForm = () => {
  const navigate = useNavigate();

  const [program, setProgram] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitTrainingFormHandler = (e) => {
    e.preventDefault();

    const training = {
      program,
      organization,
      location,
      startDate,
      endDate,
      description,
    };
    console.log(training);
  };

  return (
    <div className="w-1/2 rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
      <i
        onClick={closeFormHandler}
        class="ri-close-line text-[1.4rem] text-end block"
      ></i>
      <h1 className="text-xl font-semibold text-center">Training details</h1>
      <form
        onSubmit={submitTrainingFormHandler}
        className="w-full mt-5 flex flex-col gap-5"
      >
        <div>
          <label htmlFor="program" className="font-semibold">
          Training program
          </label>
          <input
            onChange={(e) => setProgram(e.target.value)}
            value={program}
            type="text"
            id="program"
            placeholder="e.g. Operations"
            className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          />
        </div>
        <div>
          <label htmlFor="organization" className="font-semibold">
            Organization
          </label>
          <input
            onChange={(e) => setOrganization(e.target.value)}
            value={organization}
            type="text"
            id="organization"
            placeholder="e.g. Internshala Training"
            className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          />
        </div>
        <div>
          <label htmlFor="location" className="font-semibold">
            Location
          </label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            id="location"
            placeholder="e.g. Mumbai"
            className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          />
        </div>
        <div className="w-full flex justify-between">
          <div>
            <label htmlFor="start" className="font-semibold">
              Start date
            </label>
            <input
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              type="date"
              id="start"
              placeholder="Choose date"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div>
            <label htmlFor="end" className="font-semibold">
              End date
            </label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              type="date"
              id="end"
              placeholder="Choose date"
              className="w-full px-4 py-2 mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="font-semibold">
            Description (optional)
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            id="description"
            placeholder="Short description about training (max 700 char)"
            className="w-full h-[20vh] resize-none px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          ></textarea>
        </div>
        <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
          Save
        </button>
      </form>
    </div>
  );
}

export default TrainingForm