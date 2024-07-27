import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncEmployerEditProfile } from "../../../store/actions/employerActions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { employer } = useSelector((state) => state.employerReducer);

  const [firstName, setFirstName] = useState(employer && employer.firstName);
  const [lastName, setLastName] = useState(employer && employer.lastName);
  const [email, setEmail] = useState(employer && employer.email);
  const [contact, setContact] = useState(employer && employer.contact);
  const [designation, setDesignation] = useState(
    (employer && employer.designation) || ""
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const details = {
      firstName,
      lastName,
      email,
      contact,
      designation,
    };
    dispatch(asyncEmployerEditProfile(details));
    navigate("/employer/company");
  };

  return (
    employer && (
      <div className="w-full px-[10%] py-10 flex flex-col items-center">
        <h1 className="text-[2vw] font-semibold text-zinc-600 text-center">
          Personal Details
        </h1>
        <form onSubmit={submitHandler} className="w-2/3 shadow px-10 py-10">
          <div className="px-4 py-4 text-zinc-600 bg-[#EAFCFF] rounded w-full border outline-1 outline-sky-200 mb-5">
            <p>Please provide all your details to proceed.</p>
          </div>
          <div className="flex item-center gap-5 mb-5">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                id="firstname"
                placeholder="John"
                className="px-4 py-2 rounded w-full border z"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                id="lastname"
                placeholder="Deo"
                className="px-4 py-2 rounded w-full border outline-1 outline-sky-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="email@gmail.com"
              className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
            />
          </div>
          <div>
            <label htmlFor="designation">Designation</label>
            <input
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
              type="text"
              id="designation"
              placeholder="Eg. HR Manager"
              className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
            />
          </div>
          <div>
            <label htmlFor="contact">Mobile contact</label>
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              type="contact"
              id="contact"
              placeholder="Mobile Number"
              className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
            />
          </div>
          <button className="w-full py-2 rounded bg-[#00A5EC] text-white font-semibold">
            Next
          </button>
        </form>
        <p className="mt-20">
          Need help? Call us at{" "}
          <span className="text-[#00A5EC] font-semibold">+91 8448444852</span>,
          available from Mon to Fri, 10 AM - 6 PM.
        </p>
      </div>
    )
  );
};

export default Profile;
