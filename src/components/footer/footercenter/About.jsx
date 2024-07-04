import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const arr = [
    "About us",
    "We're hiring",
    "Hire interns for your company",
    "Post a Job",
  ];
  return (
    <div className="w-fit py-5">
      {arr.map((text) => (
        <Link className="text-white/90 mb-2 block">{text}</Link>
      ))}
    </div>
  );
};

export default About;
