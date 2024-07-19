import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncEmployerSignout } from "../../../store/actions/employerActions";
import { toast } from "react-toastify";

const Links = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(asyncEmployerSignout());
    navigate("/");
    toast.success("Logout Employer Successfully");
  };

  return (
    <div
      className={`w-[15%] py-5 bg-white shadow absolute top-20 right-40 ${props.hiddenDiv}`}
    >
      <h1 className="px-4 text-xl font-medium">{props.fullName}</h1>
      <h3 className="px-4 font-semibold pb-3 border-b text-xs">{props.email}</h3>
      <Link className="px-4 py-1 block mt-3 font-medium hover:text-[#00A5EC]">
        Help Center
      </Link>
      <Link className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
        Billing
      </Link>
      <Link
        to="/employer/profile"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Edit Profile
      </Link>
      <Link
        to="/employer/change_password"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Change Password
      </Link>
      <Link
        to="/employer/delete_account"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Delete My Account
      </Link>
      <button
        onClick={logoutHandler}
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Logout
      </button>
    </div>
  );
};

export default Links;
