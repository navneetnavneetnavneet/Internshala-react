import React from "react";
import Nav from "../../student/dashboard/Nav";
import Footer from "../../footer/Footer";

const JobDetails = () => {
  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full py-10 flex flex-col justify-start items-center">
        <h1 className="text-3xl font-bold">
          Associate Content Writer Fresher Job
        </h1>
        <div className="w-2/3 mt-10 rounded-xl border px-10 py-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold">
                Business Development Associate
              </h1>
              <h2 className="text-base font-semibold text-zinc-600">
                Bussiness
              </h2>
            </div>
            <img
              className="w-16 h-16 object-cover"
              src="https://internshala.com/static/images/search/placeholder_logo.svg"
              alt=""
            />
          </div>
          <div className="mt-5 flex items-center justify-start gap-2 text-zinc-600">
            <i className="ri-group-line"></i>
            <span>57 applicants</span>
          </div>
          <hr className="mt-10" />
          <div className="mt-5">
            <h1 className="text-base font-semibold">Job type</h1>
            <span className="text-zinc-600">In Office</span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Skill(s) required</h1>
            <span className="text-zinc-600">Full Stack Development</span>
          </div>
          <div className="mt-5">
            <h1 className="text-base font-semibold">Salary</h1>
            <span className="text-zinc-600">
              Annual CTC: ₹ 2,16,000 - 3,00,000 /year
            </span>
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

export default JobDetails;
