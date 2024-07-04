import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployerRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newEmploye = {
      email,
      password,
      firstName,
      lastName,
      number,
    };
    console.log(newEmploye);
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
            <label htmlFor="number">Mobile Number</label>
            <input
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              type="number"
              id="number"
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
            <Link to="/student/signin" className="text-[#00A5EC]">
              Login
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegister;
