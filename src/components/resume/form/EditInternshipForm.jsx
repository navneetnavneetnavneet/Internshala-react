import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncEditInternship } from "../../../store/actions/studentActions";

const EditInternshipForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { student } = useSelector((state) => state.studentReducer);

  const internship = student && student.resume.internships.find((i) => i.id == id);

  const [profile, setProfile] = useState(internship.profile);
  const [organization, setOrganization] = useState(internship.organization);
  const [location, setLocation] = useState(internship.location);
  const [startDate, setStartDate] = useState(internship.startDate);
  const [endDate, setEndDate] = useState(internship.endDate);
  const [description, setDescription] = useState(internship.description);

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitInternshipFormHandler = (e) => {
    e.preventDefault();

    const internship = {
      profile,
      organization,
      location,
      startDate,
      endDate,
      description,
    };
    dispatch(asyncEditInternship(id, internship));
    navigate("/student/resume");
  };

  return (
    <div className="w-1/2 rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
      <i
        onClick={closeFormHandler}
        className="ri-close-line text-[1.4rem] text-end block"
      ></i>
      <h1 className="text-xl font-semibold text-center">Internship details</h1>
      <form
        onSubmit={submitInternshipFormHandler}
        className="w-full mt-5 flex flex-col gap-5"
      >
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
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
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
            placeholder="Short description of work done (max 250 char)"
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

export default EditInternshipForm;
