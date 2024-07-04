import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import StudentRegister from "./components/register/StudentRegister";
import EmployerRegister from "./components/register/EmployerRegister";
import StudentLogin from "./components/login/StudentLogin";

const App = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />

      <Routes>
        <Route path='/student/signup' element={<StudentRegister />} />
        <Route path='/employer/signup' element={<EmployerRegister />} />
      </Routes>
    </div>
  );
};

export default App;
