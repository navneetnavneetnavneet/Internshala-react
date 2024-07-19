import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncAddJob } from "../../../store/actions/studentActions";
import { toast } from "react-toastify";

const JobForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [designation, setDesignation] = useState("");
  const [profile, setProfile] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitJobFormHandler = (e) => {
    e.preventDefault();

    const job = {
      designation,
      profile,
      organization,
      location,
      startDate,
      endDate,
      description,
    };
    if (
      designation.trim() == "" ||
      profile.trim() == "" ||
      organization.trim() == "" ||
      location.trim() == "" ||
      startDate.trim() == "" ||
      endDate.trim() == ""
    ) {
      toast.warning("All field required !");
      return
    }

    dispatch(asyncAddJob(job));
    navigate("/student/resume");
    toast.success("Add Job Details");
  };

  return (
    <div className="w-full min-h-full bg-[rgba(0,0,0,.3)] z-[100] absolute top-0 left-1/2 -translate-x-1/2">
      <div className="w-1/2 bg-white rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
        <i
          onClick={closeFormHandler}
          className="ri-close-line text-[1.4rem] text-end block"
        ></i>
        <h1 className="text-xl font-semibold text-center">Job details</h1>
        <form
          onSubmit={submitJobFormHandler}
          className="w-full mt-5 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="designation" className="font-semibold">
              Designation
            </label>
            <input
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
              type="text"
              id="designation"
              placeholder="e.g. Software Engineer"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div>
            <label htmlFor="profile" className="font-semibold">
              Profile
            </label>
            <input
              onChange={(e) => setProfile(e.target.value)}
              value={profile}
              type="text"
              id="profile"
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
              placeholder="e.g. Internshala"
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
            <div className="w-[48%]">
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
            <div className="w-[48%]">
              <label htmlFor="end" className="font-semibold">
                End date
              </label>
              <input
                onChange={(e) => setEndDate(e.target.value)}
                value={endDate}
                type="date"
                id="end"
                placeholder="Choose date"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="font-semibold">
              Description <span className="text-zinc-400 text-xs font-normal">(optional)</span>
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              id="description"
              placeholder="Short description of work done (max 250 char)"
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

export default JobForm;
