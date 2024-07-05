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
import Bookmark from "./components/bookmark/Bookmark";
import Help from "./components/help/Help"
import Safety from "./components/safety/Safety";

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
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/student/help" element={<Help />} />
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
