import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncEmployerDeleteAccount } from "../../../store/actions/employerActions";

const EmployerDeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccountHandler = () => {
    dispatch(asyncEmployerDeleteAccount());
    navigate("/");
  };

  return (
    <div className="w-full h-screen py-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Delete my account</h1>
      <p className="text-zinc-600 w-1/4 mt-5">
        Username, we’re sorry to see you go.
        <br />
        <br />
        Please note that deleting your account is irreversible and all the data
        associated with your{" "}
        <span className="font-semibold">example@gmail.com</span> account
        (including access to trainings) will be permanently deleted.
      </p>
      <button
        onClick={deleteAccountHandler}
        className="w-1/4 px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf]  mt-5 text-white/90 font-semibold"
      >
        Delete account
      </button>
    </div>
  );
};

export default EmployerDeleteAccount;
