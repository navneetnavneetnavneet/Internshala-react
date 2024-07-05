import React from "react";

const Card = ({ card }) => {
  return (
    <div className="w-[32%] h-[30vh] border rounded flex flex-col items-center gap-5 px-5 py-5">
      <h1 className="text-lg font-semibold text-zinc-600">{card.title}</h1>
      <p className="text-zinc-600 text-center">{card.details}</p>
      <button className="w-full rounded flex items-center justify-center py-2 bg-[#00A5EC] text-white/90 font-semibold">
        {card.btn}
        <i class="ri-arrow-right-s-line text-[1.4rem]"></i>
      </button>
    </div>
  );
};

export default Card;
