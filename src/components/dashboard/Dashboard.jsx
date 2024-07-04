import React from "react";
import StudentDetails from "./StudentDetails";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-red-100">
      <Nav />
      <StudentDetails />
    </div>
  );
};

export default Dashboard;
