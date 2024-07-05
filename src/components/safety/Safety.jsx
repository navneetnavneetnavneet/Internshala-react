import React from "react";
import SafetyTop from "./SafetyTop";
import SafetyBottom from "./SafetyBottom";
import SafetyCenter from "./SafetyCenter";

const Safety = () => {
  return (
    <div className="w-full min-h-screen px-[20%] py-20 flex flex-col gap-10">
      <SafetyTop />
      <SafetyCenter />
      <SafetyBottom />
    </div>
  );
};

export default Safety;
