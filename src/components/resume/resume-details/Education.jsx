import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="w-full border-t border-b mt-5 py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">Education</h4>
      <div className="w-[75%]">
        <div>
          <div className="w-full flex justify-between">
            <h4 className="font-semibold">
              B.Tech, Computer Science & Engineering
            </h4>
            <div className="flex items-center gap-5">
              <i class="ri-pencil-line text-[1.4rem]"></i>
              <i class="ri-delete-bin-line text-[1.4rem]"></i>
            </div>
          </div>
          <p>Technocrats Institute of Technology</p>
          <p>2021 - 2025</p>
        </div>
        <Link className="text-[#00A5EC] mt-2 flex items-center gap-1">
          <i class="ri-add-line text-[1.4rem]"></i> Add education
        </Link>
      </div>
    </div>
  );
};

export default Education;
