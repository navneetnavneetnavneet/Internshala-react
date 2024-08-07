import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncNewPassword } from "../../../store/actions/studentActions";
import { asyncEmployerNewPassword } from "../../../store/actions/employerActions";
import { toast } from "react-toastify";

const EmployerNewPassword = () => {
  const navigate = useNavigate();
  const { employerId } = useParams();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const changePasswordHandler = (e) => {
    e.preventDefault();
    dispatch(asyncEmployerNewPassword(employerId, password));

    navigate("/student/signin");
    toast.success("Change Password Successfully");
  };

  return (
    <div className="w-full h-screen py-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">New Password</h1>
      <form
        onSubmit={changePasswordHandler}
        className="w-1/4 rounded border mt-5 p-5"
      >
        <div>
          <label htmlFor="passowrd">New Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded mt-1 outline-[#00A5EC]"
          />
          <button
            disabled={password.trim().length > 6 ? false : true}
            className="w-full px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf]  mt-5 text-white/90 font-semibold"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployerNewPassword;
