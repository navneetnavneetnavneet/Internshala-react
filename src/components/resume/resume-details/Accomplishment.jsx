import React from "react";
import { Link } from "react-router-dom";

const Accomplishment = () => {
  return (
    <div className="w-full py-5 text-zinc-600 flex items-start justify-between">
      <h4 className="uppercase w-[15%] text-xs font-semibold">
        ACCOMPLISHMENTS/ ADDITIONAL DETAILS
      </h4>
      <div className="w-[75%]">
        <div>
          <div className="w-full flex justify-between">
            <h4 className="font-semibold">something</h4>
            <div className="flex items-center gap-5">
              <i class="ri-pencil-line text-[1.4rem]"></i>
              <i class="ri-delete-bin-line text-[1.4rem]"></i>
            </div>
          </div>
          <p></p>
          <p></p>
        </div>
        <Link
          to="/student/resume/accomplishment"
          className="text-[#00A5EC] mt-2 flex items-center gap-1"
        >
          <i class="ri-add-line text-[1.4rem]"></i> Add accomplishment/
          additional detail
        </Link>
      </div>
    </div>
  );
};

export default Accomplishment;
