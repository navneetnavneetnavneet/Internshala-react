import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "../links/Links";

const NavRight = () => {
  const [hiddenDiv, setHiddenDiv] = useState("hidden");
  const mouseEnter = () => {
    setHiddenDiv("initial");
  };

  const hiddenHandler = () => {
    setHiddenDiv("hidden");
  };

  return (
    <div className="flex items-center gap-10">
      <Link className="hover:text-[#00A5EC] font-semibold">
        Plans and Pricing
      </Link>
      <Link className="hover:text-[#00A5EC] font-semibold">Dashboard</Link>
      <Link className="hover:text-[#00A5EC] font-semibold">
        Post Internship/Job
      </Link>
      <i className="hover:text-[#00A5EC] ri-message-2-line"></i>
      <div
        onMouseEnter={mouseEnter}
        onClick={hiddenHandler}
        className="hoverdiv hover:border-[#00A5EC] hover:text-[#00A5EC] flex items-center gap-1"
      >
        <h1 className="w-10 h-10 border border-zinc-600 rounded-full flex items-center justify-center">
          N
        </h1>
        <i className="ri-arrow-down-s-fill"></i>
      </div>
      <Links hiddenDiv={hiddenDiv} />
    </div>
  );
};

export default NavRight;