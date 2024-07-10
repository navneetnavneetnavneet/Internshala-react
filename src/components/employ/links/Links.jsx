import React from "react";
import { Link } from "react-router-dom";

const Links = (props) => {
  const logoutHandler = () => {
    console.log("employer logout");
  };

  return (
    <div className={`w-[15%] py-5 bg-white shadow absolute top-20 right-40 ${props.hiddenDiv}`}>
      <h1 className="px-4 text-xl font-medium">John Deo</h1>
      <h3 className="px-4 font-semibold pb-3 border-b">example@gmail.com</h3>
      <Link className="px-4 py-1 block mt-3 font-medium hover:text-[#00A5EC]">
        Help Center
      </Link>
      <Link className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
        Billing
      </Link>
      <Link className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
        Change Password
      </Link>
      <Link className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
        Change Email Address
      </Link>
      <Link className="px-4 py-1 block font-medium hover:text-[#00A5EC]">
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
