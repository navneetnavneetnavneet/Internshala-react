import React from "react";
import Course from "./Course";

const CourseDetails = () => {
  const courseArray = [
    {
      image:
        "https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
      title: "Web Development",
      details: "Learn how to creat a website from scratch",
      duration: "8",
    },
    {
      image:
        "https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
      title: "Machine Learning",
      details:
        "Learn Machine Learning From Scratch and take the first step towards AI",
      duration: "6",
    },
    {
      image:
        "https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
      title: "Programming with Python",
      details: "Build a fantasy cricket game using Python language",
      duration: "6",
    },
    {
      image:
        "https://trainings.internshala.com/cached_uploads/home/images/c-plus-plus.jpg",
      title: "Programming with C and C++",
      details: "Build a strong programming foundation by  learning C and C++",
      duration: "8",
    },
];

  return (
    <div className="w-full py-20">
      <h1 className="text-[2vw] font-semibold text-center">
        Learn these skills to build a career in Web Development
      </h1>
      <h3 className="text-lg text-center text-zinc-600">
        These recommendations are based on your profile and application history
      </h3>
      <div className="flex justify-between">
        {courseArray.map((course, idx) => (
          <Course key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
