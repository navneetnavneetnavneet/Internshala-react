import React from "react";
import Nav from "../student/dashboard/Nav";
import Footer from "../footer/Footer";

const InternshipDetails = () => {
  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full py-10 flex flex-col justify-start items-center">
        <div className="w-2/3 h-[15vh] mb-5 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://internshala.com/static/images/internship/detail/specialization_banner/fsw_1/r1920.png"
            alt=""
          />
        </div>
        <h1 className="text-3xl font-bold">Web Development Internship</h1>
        <div className="w-2/3 mt-10 rounded-xl border px-10 py-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold">Web Development</h1>
              <h2 className="text-base font-semibold text-zinc-600">
                Sharoff Steel Suppliers
              </h2>
            </div>
            <img
              className="w-16 h-16 object-cover"
              src="https://internshala.com/static/images/search/placeholder_logo.svg"
              alt=""
            />
          </div>
          <div className="mt-5 flex items-center gap-20 font-semibold">
            <div className="">
              <span className="flex items-center gap-2 text-zinc-600">
                <i className="ri-calendar-line"></i>
                <p className="uppercase text-xs">Duration</p>
              </span>
              <p>3 Months</p>
            </div>
            <div className="">
              <span className="flex items-center gap-2 text-zinc-600">
                <i className="ri-calendar-line"></i>
                <p className="uppercase text-xs">Stipend</p>
              </span>
              <p>₹ 6,000 - 8,000 /month</p>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-start gap-2 text-zinc-600">
            <i className="ri-group-line"></i>
            <span>57 applicants</span>
          </div>
          <hr className="mt-10" />
          <div className="mt-5">
            <h1 className="text-base font-semibold">Internship type</h1>
            <span className="text-zinc-600">In Office</span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Skill(s) required</h1>
            <span className="text-zinc-600">Full Stack Development</span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Perks</h1>
            <span className="px-4 mt-2 w-fit text-zinc-600 py-2 block rounded-full bg-zinc-200">
              5 days aweek
            </span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Number of openings</h1>
            <span className="text-base font-semibold text-zinc-600">5</span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Prefrences</h1>
            <span className="text-base font-semibold text-zinc-600">CSE</span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Description</h1>
            <span className="text-base text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum sequi, ad soluta sapiente quam iste corporis rerum
              repellat dolore officia dicta odio sunt labore iure, voluptate
              delectus fuga porro placeat.
            </span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Assesments</h1>
            <span className="text-base text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              temporibus voluptate eum culpa mollitia? Sapiente molestiae vero
              at necessitatibus rem? ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum sequi, ad soluta sapiente quam iste
              corporis.
            </span>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] tracking-tight font-semibold text-white">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternshipDetails;
