import React from 'react'
import { Link } from 'react-router-dom';

const Team = () => {

    const arr = ["Team Diary", "Blog", "Our Services"];
  return (
    <div className="w-fit py-5">
      {arr.map((text) => (
        <Link className="text-white/90 mb-2 block">{text}</Link>
      ))}
    </div>
  )
}

export default Team