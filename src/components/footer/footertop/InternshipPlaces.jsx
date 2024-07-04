import React from "react";
import { Link } from "react-router-dom";

const internshipPlacesArray = [
  "India",
  "Delhi",
  "Bengalore",
  "Hydrabad",
  "Mumbai",
  "Chennai",
  "Gurgaon",
  "Kolkata",
];

const InternshipPlaces = () => {
  return (
    <div className="w-fit pb-10">
      <h1 className="text-lg font-semibold mb-3 text-white/90">
        Internships by places
      </h1>
      {internshipPlacesArray.map((place, idx) => (
        <Link key={idx} className="text-white/90 mb-2 block">Internship in {place}</Link>
      ))}
      <Link className="text-white/90 mb-2 block">Virtual internship</Link>
      <Link className="text-white/90 mb-2 block">Virtual all internship</Link>
    </div>
  );
};

export default InternshipPlaces;
