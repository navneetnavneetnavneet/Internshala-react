import React from "react";

const Bookmark = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F8F8F8]">
      <h1 className="text-[2vw] font-semibold">My Bookmarks</h1>
      <img
      className="my-10"
        src="https://internshala.com/static/images/bookmarks/no_bookmark_image.svg"
        alt=""
      />
      <h2 className="text-2xl font-semibold">No bookmarks</h2>
      <p className="text-zinc-600 my-5">You have no active bookmarked internships or jobs</p>
      <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] tracking-tight font-semibold text-white">
        Browser internships
      </button>
    </div>
  );
};

export default Bookmark;
