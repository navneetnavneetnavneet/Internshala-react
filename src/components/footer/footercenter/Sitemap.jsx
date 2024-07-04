import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const arr = ["Sitemap", "College TPO registration", "List of Companies"];
  return (
    <div className="w-fit py-5">
      {arr.map((text, idx) => (
        <Link key={idx} className="text-white/90 mb-2 block">{text}</Link>
      ))}
    </div>
  );
};

export default Sitemap;
