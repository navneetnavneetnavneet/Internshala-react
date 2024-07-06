import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Links = (props) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <div
      className={`w-[15%] py-5 bg-white shadow absolute top-20 right-40 ${props.hiddenDiv}`}
    >
      <h1 className="px-4 text-xl font-medium">John Deo</h1>
      <h3 className="px-4 font-semibold">example@gmail.com</h3>
      <div className="hover:text-[#00A5EC] w-full mt-5 font-medium flex items-center justify-between border-t border-b border-zinc-200 py-1">
        <div className="flex items-center gap-1 px-4">
          <i className="ri-star-s-fill text-yellow-400"></i>
          <h5>5</h5>
        </div>
        <div className="flex items-center gap-1 px-4">
          <h6>Know More</h6>
          <i className="ri-arrow-right-s-line text-[1.4rem]"></i>
        </div>
      </div>
      <Link
        to="/student/dashboard"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Home
      </Link>
      <Link
        to="/student/application"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        My Application
      </Link>
      <Link
        to="/bookmark"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        My Bookmarks
      </Link>
      <Link
      to="/student/resume"
       className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
        Edit Resume
      </Link>
      <Link className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
        Edit Prefrences
      </Link>
      <Link
        to="safety"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Safety Tips
      </Link>
      <Link
        to="/student/help"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Help Center
      </Link>
      <Link
        to="/student/change_password"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Change Password
      </Link>
      <Link
        to="/student/change_email"
        className="px-4 py-1 block font-medium hover:text-[#00A5EC]"
      >
        Change Email Address
      </Link>
      <Link
      to="/student/delete_account" 
      className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
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
