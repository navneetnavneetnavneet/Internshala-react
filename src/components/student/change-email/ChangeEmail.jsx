import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncChangeEmail } from "../../../store/actions/studentActions";
import { toast } from "react-toastify";

const ChangeEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.studentReducer);

  const chnageEmailHandler = (e) => {
    e.preventDefault();

    dispatch(asyncChangeEmail(email));
    navigate("/student/dashboard");
    toast.success("Change Email Successfully")
  };

  return (
    student && (
      <div className="w-full h-screen py-10 flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-center">
          Change email address
        </h1>
        <p className="text-zinc-600 w-1/4 mt-5">
          Note: Please note that all the data associated with your account (
          <span className="font-semibold">{student.email}</span>) will be linked
          to your new email address after this change. Also, ensure that you
          have access to both the email accounts for making the change.
        </p>
        <form
          onSubmit={chnageEmailHandler}
          className="w-1/4 rounded border mt-5 p-5"
        >
          <div>
            <label htmlFor="email">New email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded mt-1 outline-[#00A5EC]"
            />
            <button
              disabled={email.trim().length > 0 ? false : true}
              className="w-full px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf]  mt-5 text-white/90 font-semibold"
            >
              Change email
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default ChangeEmail;
