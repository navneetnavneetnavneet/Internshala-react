import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

const NavRight = () => {
  const [hiddenDiv, setHiddenDiv] = useState("hidden");
  const mouseEnter = () => {
    setHiddenDiv("initial");
  };

  const hiddenHandler = () => {
    setHiddenDiv("hidden");
  }

  return (
    <div className="flex items-center gap-10 font-semibold">
      <div className="hover:text-[#00A5EC] px-4 h-20 flex items-center gap-2 hover:bg-[#EAFCFF]">
        <Link className="flex items-center gap-2">Internship</Link>
        <i className="ri-arrow-down-s-fill"></i>
      </div>
      <div className="hover:text-[#00A5EC] px-4 h-20 flex items-center gap-2 hover:bg-[#EAFCFF]">
        <Link className="flex items-center gap-2">Courses</Link>
        <i className="ri-arrow-down-s-fill"></i>
      </div>
      <div className="hover:text-[#00A5EC] px-4 h-20 flex items-center gap-2 hover:bg-[#EAFCFF]">
        <Link className="flex items-center gap-2">Jobs</Link>
        <i className="ri-arrow-down-s-fill"></i>
      </div>

      <Link className="hover:text-[#00A5EC] font-semibold flex items-center gap-2">
        Clubs
      </Link>
      <i className="hover:text-[#00A5EC] ri-notification-2-line"></i>
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
