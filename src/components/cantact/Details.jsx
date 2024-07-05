import React from "react";

const Details = () => {
  const detsArray = [
    {
      title: "University/college associations",
      email: "university.relations@internshala.com",
    },
    { title: "Media queries", email: "smriti@internshala.com" },
    { title: "Fest sponsorships", email: "smriti@internshala.com" },
    { title: "For everything else", email: "sarvesh@internshala.com" },
  ];

  return (
    <div className="w-full h-[50vh] flex justify-center gap-5 py-10">
      <div className="w-[32%]">
        <h1 className="text-xl font-semibold text-zinc-600">For others</h1>
        {detsArray.map((dets, idx) => (
          <div key={idx} className="mt-3">
            <h3 className="text-zinc-600">{dets.title}</h3>
            <p className="text-zinc-600">
              Email us: <span className="text-[#00A5EC]">{dets.email}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="w-[32%]">
        <h1 className="text-xl font-semibold text-zinc-600">Address</h1>
        <p className="text-zinc-600 my-3">
          Scholiverse Educare Pvt. Ltd. 901A/B, Iris Tech Park, Sector 48,
          Gurugram, Haryana, India - 122018
        </p>
        <img
          src="https://internshala.com/static/images/contact/google-maps-icon.png"
          alt=""
        />
        <p className="text-zinc-600 mt-3">
          Working Hours: Monday to Friday, 10:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default Details;
