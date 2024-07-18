import React from "react";
import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <div className="flex items-center gap-10">
      <img
        className="w-40 h-20 object-cover"
        src="../../../public/logo.jpg"
        alt=""
      />
      <Link>
        Interships <i className="ri-arrow-down-s-fill"></i>
      </Link>
      <Link>
        Jobs <i className="ri-arrow-down-s-fill"></i>
      </Link>
      <Link>
        Courses <i className="ri-arrow-down-s-fill"></i>
      </Link>
    </div>
  );
};

export default NavLeft;
