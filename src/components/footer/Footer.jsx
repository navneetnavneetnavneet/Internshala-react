import React from "react";
import FooterTop from "./footertop/FooterTop";
import FooterCenter from "./footercenter/FooterCenter";
import FooterBottom from "./footerbottom/FooterBottom";

const Footer = () => {
  return <div className="w-full h-screen bg-zinc-800 px-[10%] py-10">
    <FooterTop />
    <FooterCenter />
    <FooterBottom />
  </div>;
};

export default Footer;
