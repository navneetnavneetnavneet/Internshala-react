import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <Link
      to="/student/dashboard"
      className="flex items-center gap-1 text-[#00A5EC]"
    >
      <i class="ri-arrow-left-line"></i>
      Back
    </Link>
  );
};

export default Back;
