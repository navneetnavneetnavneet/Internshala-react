import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncStudentUpdate } from "../../../store/actions/studentActions";

const PersonalDetailsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.studentReducer);

  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [profileImage, setProfileImage] = useState("");
  const [email, setEamil] = useState(student.email);
  const [contact, setContact] = useState(student.contact);
  const [city, setCity] = useState(student.city);
  const [gender, setGender] = useState(student.gender);

  const closeFormHandler = () => {
    navigate(-1);
  };

  const submitPersonalDetailsFormHandler = (e) => {
    e.preventDefault();

    const updatedStudent = {
      firstName,
      lastName,
      profileImage,
      email,
      contact,
      city,
      gender,
    };
    dispatch(asyncStudentUpdate(updatedStudent));
    navigate("/student/resume");
  };

  return (
    <div className="w-1/2 rounded-lg text-zinc-600 border mx-auto my-10 px-10 py-5">
      <i
        onClick={closeFormHandler}
        class="ri-close-line text-[1.4rem] text-end block"
      ></i>
      <h1 className="text-xl font-semibold text-center">Internship details</h1>
      <form
        onSubmit={submitPersonalDetailsFormHandler}
        className="w-full mt-5 flex flex-col gap-5"
      >
        <div className="w-full flex justify-between">
          <div>
            <label htmlFor="firstname" className="font-semibold">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              id="firstname"
              placeholder="First Name"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="font-semibold">
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              id="end"
              placeholder="Last Name"
              className="w-full px-4 py-2 mt-1 outline-1 outline-sky-200 border rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="profileImage" className="font-semibold">
            Profile picture <span className="opacity-50">(Recommended)</span>
          </label>
          <input
            onChange={(e) => setProfileImage(e.target.files[0])}
            type="file"
            id="profileImage"
            className="w-1/2 px-4 py-2 bg-[#EAFCFF] block mt-1 outline-1 outline-sky-200 border rounded"
          />
          <p className="text-xs font-semibold opacity-50 mt-1 tracking-wide">
            Upload a professional picture of yourself (Max file size: 1Mb and
            max resolution: 500px x 500px. File type - jpeg, jpg, png, gif)
          </p>
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            onChange={(e) => setEamil(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
            disabled={true}
            className="w-full px-4 py-2 bg-[#EEEEEE] mt-1 outline-1 outline-sky-200 border rounded"
          />
          <Link
            to="/student/change_email"
            className="font-semibold text-[#00A5EC] text-end block mt-1"
          >
            Change email
          </Link>
        </div>
        <div>
          <label htmlFor="contact" className="font-semibold">
            Contact contact
          </label>
          <input
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            type="contact"
            id="contact"
            placeholder="Mobile Number"
            className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          />
        </div>
        <div>
          <label htmlFor="city" className="font-semibold">
            City
          </label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            id="city"
            placeholder="Current Location"
            className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
          />
        </div>
        <div>
          <label htmlFor="gender" className="font-semibold">
            Gender
          </label>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <input
                onChange={(e) => setGender(e.target.value)}
                value="Male"
                checked={gender === "Male" ? true : false}
                type="radio"
                id="gender"
                className="block mt-1"
                name="gender"
              />
              Male
            </div>
            <div className="flex items-center gap-1">
              <input
                onChange={(e) => setGender(e.target.value)}
                value="Female"
                checked={gender === "Female" ? true : false}
                type="radio"
                id="gender"
                className="block mt-1"
                name="gender"
              />
              Female
            </div>
            <div className="flex items-center gap-1">
              <input
                onChange={(e) => setGender(e.target.value)}
                value="Others"
                checked={gender === "Others" ? true : false}
                type="radio"
                id="gender"
                className="block mt-1"
                name="gender"
              />
              Others
            </div>
          </div>
        </div>
        <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
          Update
        </button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
