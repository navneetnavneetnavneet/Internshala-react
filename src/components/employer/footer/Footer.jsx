import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-zinc-900">
      <div className="w-full px-[10%] flex justify-between gap-x-10 pb-10">
        <Link className="text-white/90">About us</Link>
        <Link className="text-white/90">Blog</Link>
        <Link className="text-white/90">We're hiring</Link>
        <Link className="text-white/90">Employer resources</Link>
        <Link className="text-white/90">Our services</Link>
        <Link className="text-white/90">Terms & conditions</Link>
        <Link className="text-white/90">Privacy</Link>
        <Link className="text-white/90">Refund policy</Link>
        <Link className="text-white/90">Contact us</Link>
        <Link className="text-white/90">Sitemap</Link>
      </div>
      <hr className="border border-zinc-600" />
      <div className="w-full px-[10%] flex items-start justify-between mt-3">
        <div className="flex items-center gap-5 text-white/90">
          <i className="text-[1.4rem] ri-instagram-line"></i>
          <i className="text-[1.4rem] ri-twitter-line"></i>
          <i className="text-[1.4rem] ri-youtube-fill"></i>
          <i className="text-[1.4rem] ri-linkedin-line"></i>
        </div>
          <p className="text-white/90">
            © Copyright 2024 Internshala <br /> (Scholiverse Educare Private Limited)
          </p>
      </div>
    </div>
  );
};

export default Footer;
