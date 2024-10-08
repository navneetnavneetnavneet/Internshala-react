import React from "react";

const BottomLeft = () => {
  return (
    <div className="flex items-center gap-5 text-white/90">
      <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded text-white/90">
        <i className="text-[1.4rem] ri-google-play-line"></i>
        Get Android App
      </button>
      <a target="_blank" href="https://www.instagram.com/internshala/">
        <i className="text-[1.4rem] ri-instagram-line"></i>
      </a>
      <a
        target="_blank"
        href="https://x.com/i/flow/login?redirect_after_login=%2FInternshala"
      >
        <i className="text-[1.4rem] ri-twitter-line"></i>
      </a>
      <a target="_blank" href="https://www.youtube.com/c/internshalaofficial">
        <i className="text-[1.4rem] ri-youtube-fill"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/internshala/">
        <i className="text-[1.4rem] ri-linkedin-line"></i>
      </a>
    </div>
  );
};

export default BottomLeft;
