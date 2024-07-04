import React from 'react'
import { Link } from 'react-router-dom';

const Condition = () => {
    const arr = ["Term & Conditions", "Privacy", "Contact us"];

  return (
    <div className="w-fit py-5">
      {arr.map((text) => (
        <Link className="text-white/90 mb-2 block">{text}</Link>
      ))}
    </div>
  )
}

export default Condition