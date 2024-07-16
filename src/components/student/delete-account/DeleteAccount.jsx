import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncStudentDelete } from "../../../store/actions/studentActions";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {student} = useSelector((state) => state.studentReducer);

  const deleteAccountHandler = () => {
    dispatch(asyncStudentDelete());
    navigate("/");
  };

  return (
    <div className="w-full h-screen py-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Delete my account</h1>
      <p className="text-zinc-600 w-1/4 mt-5">
        {student.firstName}, we’re sorry to see you go.
        <br />
        <br />
        Please note that deleting your account is irreversible and all the data
        associated with your{" "}
        <span className="font-semibold">{student.email}</span> account
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

export default DeleteAccount;
