import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncForgetPassword } from "../../../store/actions/studentActions";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const sendMailHandler = async (e) => {
    try {
      e.preventDefault();
      const data = await dispatch(asyncForgetPassword(email));

      navigate(`/student/forget-link/${data.student._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen px-[10%] py-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Forgot Password</h1>
      <p className="w-1/4 text-zinc-600 tracking-tighter my-5">
        Please enter your e-mail address. You will receive an e-mail along with
        a link which can be used to reset your password.
      </p>
      <form onSubmit={sendMailHandler} className="w-1/4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="email@gmail.com"
            className="px-4 py-2 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <button
          disabled={email.trim() == "" ? true : false}
          className="w-full py-2 my-5 rounded bg-[#00A5EC] text-white font-semibold"
        >
          Submit
        </button>
        <p className="text-zinc-600">
          I am not receiving password reset email.{" "}
          <span className="text-[#00A5EC]">Need help?</span>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
