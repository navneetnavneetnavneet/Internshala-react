import React from "react";
import { Link } from "react-router-dom";

const NavRight = () => {
  return (
    <div className="flex items-center gap-5">
      <Link className="flex items-center gap-2">
        <i class="ri-search-line text-[1.4rem]"></i> Search
      </Link>
      <Link
        to="/student/signin"
        className="px-4 py-2 rounded-md border border-[#00A5EC] text-[#00A5EC]"
      >
        Login
      </Link>
      <Link
        to="/student/signup"
        className="px-4 py-2 rounded-md bg-[#00A5EC] text-white font-semibold"
      >
        Candidate sign-up
      </Link>
      <Link
        to="/employer/signup"
        className="px-4 py-2 rounded-md bg-[#00A5EC] text-white font-semibold"
      >
        Employer sign-up
      </Link>
    </div>
  );
};

export default NavRight;
