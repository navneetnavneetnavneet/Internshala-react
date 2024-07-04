import React from "react";
import { Link } from "react-router-dom";

const PlacementCourses = () => {
  const coursesArray = [
    "Full Stack Development",
    "Data Science",
    "Human Resource Management",
    "Digital Marketing ",
    "Electric Vehicle",
    "UI/UX Design",
    "Product Management",
  ];
  return (
    <div className="w-fit pb-10">
      <h1 className="text-lg font-semibold mb-3 text-white/90">
        Placement Guarantee Courses
      </h1>
      {coursesArray.map((course, idx) => (
        <Link key={idx} className="text-white/90 mb-2 block">
          {course} course with placement
        </Link>
      ))}
    </div>
  );
};

export default PlacementCourses;
