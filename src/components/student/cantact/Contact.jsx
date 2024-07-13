import React from "react";
import Card from "./Card";
import Details from "./Details";

const Contact = () => {
  const cardArray = [
    {
      title: "Students - Internships & Jobs",
      details:
        "For internships and jobs related queries, visit Student Help Center",
      btn: "Visite student help center",
    },
    {
      title: "Student - Trainings",
      details: "For trainings related queries, visit Trainings Help Center",
      btn: "Visite taining help center",
    },
  ];

  return (
    <div className="w-full h-screen g-emerald-200 px-[10%] py-10">
      <h1 className="text-[2vw] font-semibold text-center">Contact us</h1>
      <div className="flex justify-center gap-5 mt-5">
        {cardArray.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
      <Details />
    </div>
  );
};

export default Contact;
