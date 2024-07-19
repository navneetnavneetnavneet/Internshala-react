import React from "react";

const Card = () => {
  const cardArray = [
    {
      image:
        "https://internshala.com/uploads/common/image/5eb1461de49d21588676125.svg",
      title: "Account / Profile",
      details: "Manage Your Internshala account",
    },
    {
      image:
        "https://internshala.com/uploads/common/image/5eb149b0823e01588677040.svg",
      title: "Find Internships & Jobs",
      details:
        "Find internships and jobs matching your preferences on Internshala",
    },
    {
      image:
        "https://internshala.com/uploads/common/image/5eb145a4c628e1588676004.svg",
      title: "My Applications",
      details: "Know about your current application status",
    },
    {
      image:
        "https://internshala.com/uploads/common/image/5eb145d44e09c1588676052.svg",
      title: "Facing and issue",
      details: "Report any complaint you may have against an internship or job",
    },
    {
      image:
        "https://internshala.com/uploads/common/image/5eb1458ab493b1588675978.svg",
      title: "Technical issues",
      details: "Report any technical difficulty you are facing here",
    },
    {
      image:
        "https://internshala.com/uploads/common/image/5eb14607a5cda1588676103.svg",
      title: "Need Further Assistance?",
      details: "Can’t find what you are looking for? Submit your request here",
    },
  ];

  return (
    <div className="flex justify-start gap-[2%] flex-wrap my-10">
      {cardArray.map((card, idx) => (
        <div key={idx} className="w-[32%] h-[30vh] mb-[2%] rounded shadow flex flex-col items-center justify-center px-10">
          <img src={card.image} alt="" />
          <h1 className="text-xl font-semibold text-zinc-600 my-2">
            {card.title}
          </h1>
          <p className="text-zinc-600 text-center tracking-tighter">{card.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
