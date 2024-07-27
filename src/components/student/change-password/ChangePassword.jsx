import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncChangePassword } from "../../../store/actions/studentActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const dispatch = useDispatch();

  const changePasswordHandler = (e) => {
    e.preventDefault();

    if (password != retypePassword) {
      toast.warning(
        "Password and Retype Password not Match ! Please try again"
      );
      return;
    }

    dispatch(asyncChangePassword(password));
    navigate("/student/dashboard");
    toast.success("Change Password Successfully");
  };

  return (
    <div className="w-full h-screen py-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Change Password</h1>
      <form
        onSubmit={changePasswordHandler}
        className="w-1/4 rounded border mt-5 p-5 flex flex-col gap-5"
      >
        <div>
          <label htmlFor="passowrd">New Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Must be 6 characters"
            className="w-full px-4 py-2 border rounded mt-1 outline-[#00A5EC]"
          />
        </div>
        <div>
          <label htmlFor="passowrd">Retype Password</label>
          <input
            onChange={(e) => setRetypePassword(e.target.value)}
            value={retypePassword}
            type="password"
            id="password"
            placeholder="Must be 6 characters"
            className="w-full px-4 py-2 border rounded mt-1 outline-[#00A5EC]"
          />
        </div>
        <button
          disabled={password.trim().length > 5 ? false : true}
          className="w-full px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
