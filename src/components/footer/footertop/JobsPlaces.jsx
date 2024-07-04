import React from 'react'
import { Link } from 'react-router-dom';

const JobsPlaces = () => {
    const jobsPlacesArray = [
        "Delhi",
        "Mumbai",
        "Bengalore",
        "Jaipur",
        "Kolkata",
        "Hydrabad",
        "Pune",
        "Chennai",
        "Luckhnow",
      ];
  return (
    <div className="w-fit pb-10">
    <h1 className="text-lg font-semibold mb-3 text-white/90">
      Jobs by stream
    </h1>
    {jobsPlacesArray.map((jobs, idx) => (
      <Link key={idx} className="text-white/90 mb-2 block">{jobs} jobs</Link>
    ))}
    <Link className="text-white/90 mb-2 block">View all jobs</Link>
  </div>
  )
}

export default JobsPlaces