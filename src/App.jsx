import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import StudentRegister from "./components/register/StudentRegister";
import EmployerRegister from "./components/register/EmployerRegister";
import StudentLogin from "./components/login/StudentLogin";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Application from "./components/application/Application";
import Nav from "./components/dashboard/Nav";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full min-h-screen relative">
      {pathname == "/" ? "" : <Nav />}
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/student/signup" element={<StudentRegister />} />
        <Route path="/employer/signup" element={<EmployerRegister />} />
        <Route path="/student/signin" element={<StudentLogin />} />
        <Route path="/employer/signin" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/application" element={<Application />} />
      </Routes>

      {pathname == "/student/signup" ||
      pathname == "/student/signin" ||
      pathname == "/employer/signup" ? (
        <Navbar />
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default App;
