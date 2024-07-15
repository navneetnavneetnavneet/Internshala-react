import React, { useState } from 'react'

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [designation, setDesignation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const details = {
      firstName,
      lastName,
      email,
      number,
      designation,
    };
    console.log(details);
  };

  return (
    <div className="w-full px-[10%] py-10 flex flex-col items-center">
      <h1 className="text-[2vw] font-semibold text-zinc-600 text-center">
        Personal Details
      </h1>
      <form onSubmit={submitHandler} className="w-2/3 shadow px-10 py-10">
        <div className="px-4 py-4 text-zinc-600 bg-[#EAFCFF] rounded w-full border outline-1 outline-sky-200 mb-5">
          <p>Please provide all your details to proceed.</p>
        </div>
        <div className="flex item-center gap-5 mb-5">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              id="firstname"
              placeholder="John"
              className="px-4 py-2 rounded w-full border z"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              id="lastname"
              placeholder="Deo"
              className="px-4 py-2 rounded w-full border outline-1 outline-sky-200"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="email@gmail.com"
            className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
            type="text"
            id="designation"
            placeholder="Eg. HR Manager"
            className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <div>
          <label htmlFor="number">Mobile number</label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="number"
            id="number"
            placeholder="Mobile Number"
            className="px-4 py-2 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <button className="w-full py-2 rounded bg-[#00A5EC] text-white font-semibold">
          Verify
        </button>
      </form>
      <p className="mt-20">
        Need help? Call us at +91 8448444852, available from Mon to Fri, 10 AM -
        6 PM.
      </p>
    </div>
  );
}

export default Profile