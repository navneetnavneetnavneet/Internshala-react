import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { asyncStudentSignin } from "../../../store/actions/studentActions";
import { asyncEmployerSignin } from "../../../store/actions/employerActions";
import { toast } from "react-toastify";

const StudentLogin = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let student = {
      email,
      password,
    };
    if (email.trim() == "" || password.trim().length < 6) {
      toast.error("Student Validation Failed !");
      return
    }
    dispatch(asyncStudentSignin(student));

    setEmail("");
    setPassword("");
  };

  const closeHandler = () => {
    navigate("/student/signup");
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="w-[27%] rounded-lg bg-white py-5 px-5">
        <i
          onClick={closeHandler}
          className="ri-close-line text-end block text-2xl w-full"
        ></i>

        <div className="w-full flex">
          <NavLink
            to="/student/signin"
            className={({ isActive }) =>
              isActive
                ? "text-[#00A5EC] border-b-2 border-[#00A5EC] w-1/2 text-lg font-semibold"
                : "border-none w-1/2 text-lg font-semibold"
            }
          >
            Student
          </NavLink>
          <NavLink
            to="/employer/signin"
            className={({ isActive }) =>
              isActive
                ? "text-[#00A5EC] border-b-2 border-[#00A5EC] w-1/2 text-lg font-semibold"
                : "border-none w-1/2 text-lg font-semibold"
            }
          >
            Employer T&P
          </NavLink>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <button className="w-full font-semibold py-3 shadow shadow-zinc-300 rounded ">
            Login with Google
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
            <Link
              to="/student/forget_password"
              className="text-[#00A5EC] font-semibold w-full block text-end"
            >
              Forget Password?
            </Link>
            <button className="w-full py-2 my-5 rounded bg-[#00A5EC] text-white font-semibold">
              Login
            </button>
            <h3 className="text-center">
              New to Internshala? Register (
              <Link
                to="/student/signup"
                className="text-[#00A5EC] font-semibold "
              >
                Student
              </Link>
              <span className="mx-1">/</span>
              <Link
                to="/employer/signup"
                className="text-[#00A5EC] font-semibold "
              >
                Company
              </Link>
              )
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
