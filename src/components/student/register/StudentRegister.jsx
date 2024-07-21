import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncStudentSignup } from "../../../store/actions/studentActions";
import { toast } from "react-toastify";

const StudentRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      firstName,
      lastName,
    };

    if (
      email.trim() == "" ||
      password.trim().length < 6 ||
      firstName.trim("").length < 5 ||
      lastName.trim().length < 5
    ) {
      toast.error("Student Validation Failed !");
      return
    }

    dispatch(asyncStudentSignup(newUser));
    toast.success("Student Register Successfully");
    navigate("/student/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center my-5">
      <h1 className="text-5xl font-bold tracking-tight">
        Sign-up and apply for free
      </h1>
      <h3 className="text-2xl my-5 font-normal">
        1,50,000+ companies hiring on Internshala
      </h3>
      <div className="w-[30vw] shadow  shadow-sky-300 rounded-lg px-10 py-10 flex flex-col gap-5">
        <button className="w-full py-3 font-semibold shadow shadow-zinc-300 rounded">
          Sign up with Google
        </button>
        <div className="flex items-center justify-between gap-2">
          <hr className="w-full h-[1px] bg-zinc-300 " />
          <h3 className="text-sm font-semibold text-zinc-300">OR</h3>
          <hr className="w-full h-[1px] bg-zinc-300 " />
        </div>
        <form onSubmit={submitHandler} className="w-full">
          <div>
            <label htmlFor="email">Email</label>
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
              placeholder="Must be atleast 6 characters"
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
                placeholder="John"
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
                placeholder="Deo"
                className="px-4 py-2 rounded w-full border outline-1 outline-sky-200"
              />
            </div>
          </div>
          <p className="mb-3 text-xs">
            By signing up, you agree to our{" "}
            <span className="text-[#00A5EC] font-semibold">
              {" "}
              Terms and Conditions
            </span>
            .
          </p>
          <button className="w-full py-2 rounded bg-[#00A5EC] text-white font-semibold">
            Sign-up
          </button>
        </form>
        <h3 className="text-center">
          Already Registerd?
          <Link to="/student/signin" className="text-[#00A5EC]">
            Login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default StudentRegister;
