import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncEmployerSignup } from "../../../store/actions/employerActions";
import { toast } from "react-toastify";

const EmployerRegister = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newEmployer = {
      email,
      password,
      firstName,
      lastName,
      contact,
    };

    if (
      email.trim() == "" ||
      password.trim().length < 6 ||
      firstName.trim().lastName < 5 ||
      lastName.trim().length < 5 ||
      contact.length != 10
    ) {
      toast.error("Employer Validation Failed !");
      return;
    }

    dispatch(asyncEmployerSignup(newEmployer));
    toast.success("Employer Register Successfully");
  };
  return (
    <div className="flex px-[10%] relative">
      <img
        className="absolute left-0 top-0 w-full h-full object-cover z-[-1]"
        src="https://internshala-uploads.internshala.com/common/image/4qh2ey6cixg.png"
        alt=""
      />
      <div className="w-[70%] h-screen py-10">
        <div className="flex">
          <h1 className="text-5xl font-bold tracking-tight">
            Hire Interns & Freshers
          </h1>
          <img
            src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/faster.svg"
            alt=""
          />
        </div>
        <h3 className="text-[1.7vw] font-normal tracking-tight">
          Post Internships for <span className="font-semibold">Free</span> &
          Hire Talent with up to 2 Years of Experience
        </h3>
      </div>
      <div className="w-[30%] h-screen py-10">
        <form
          onSubmit={submitHandler}
          className="w-full bg-white px-5 py-5  rounded-lg shadow"
        >
          <div>
            <label htmlFor="email">Official Email Id</label>
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
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Minimum 6 characters"
              className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
            />
          </div>
          <div className="flex item-center gap-5 mb-5">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                id="firstname"
                placeholder="Your First Name"
                className="px-4 py-2 rounded w-full border outline-1 outline-sky-200"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                id="lastname"
                placeholder="Your Last Name"
                className="px-4 py-2 rounded w-full border outline-1 outline-sky-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact">Mobile Number</label>
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              type="contact"
              id="contact"
              placeholder="Enter Mobile Number"
              className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
            />
          </div>
          <p className="mb-3 text-xs">
            By clicking on <span className="font-semibold">Post for Free</span>,
            you agree to our
            <span className="text-[#00A5EC] font-semibold"> T&C</span>.
          </p>
          <button className="w-full py-2 rounded bg-[#00A5EC] text-white font-semibold">
            Post for Free
          </button>
          <h3 className="text-center">
            Already Registerd?
            <Link to="/employer/signin" className="text-[#00A5EC]">
              Login
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegister;
