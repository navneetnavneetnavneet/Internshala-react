import React from 'react'
import { Link } from 'react-router-dom';

const InternshipStreams = () => {

    const internshipStreamsArray = ["Computer Science", "Electronics", "Mechanical", "Civil", "Marketing", "Chemical", "Finance"];

  return (
    <div className="w-fit pb-10">
      <h1 className="text-lg font-semibold mb-3 text-white/90">
        Internships by stream
      </h1>
      {internshipStreamsArray.map((stearm, idx) => (
        <Link key={idx} className="text-white/90 mb-2 block">{stearm} Internship</Link>
      ))}
      <Link className="text-white/90 mb-2 block">Summer Research Fellowship</Link>
      <Link className="text-white/90 mb-2 block">Campus Ambassador Program</Link>
      <Link className="text-white/90 mb-2 block">View all internships</Link>
    </div>
  )
}

export default InternshipStreams