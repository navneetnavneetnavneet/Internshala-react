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
import Contact from "./components/cantact/Contact";
import ChangePassword from "./components/change-password/ChangePassword";
import ChangeEmail from "./components/change-email/ChangeEmail";
import DeleteAccount from "./components/delete-account/DeleteAccount";
import Resume from "./components/resume/Resume";

import JobFrom from "./components/resume/form/JobForm";
import InternshipForm from "./components/resume/form/InternshipForm";
import TrainingForm from "./components/resume/form/TrainingForm";
import ProjectForm from "./components/resume/form/ProjectForm";
import AdditionalForm from "./components/resume/form/AdditionalForm";
import ResponsibilityForm from "./components/resume/form/ResponsibilityForm";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/student/change_password" element={<ChangePassword />} />
        <Route path="/student/change_email" element={<ChangeEmail />} />
        <Route path="/student/delete_account" element={<DeleteAccount />} />
        <Route path="/student/resume" element={<Resume />} />

        {/* resume-form */}
        <Route path="/student/resume/job" element={<JobFrom />} />
        <Route path="/student/resume/internship" element={<InternshipForm />} />
        <Route path="/student/resume/training" element={<TrainingForm />} />
        <Route path="/student/resume/project" element={<ProjectForm />} />
        <Route path="/student/resume/accomplishment" element={<AdditionalForm />} />
        <Route path="/student/resume/responsibility" element={<ResponsibilityForm />} />
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
