import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/student/navbar/Navbar";
import StudentRegister from "../components/student/register/StudentRegister";
import EmployerRegister from "../components/student/register/EmployerRegister";
import StudentLogin from "../components/student/login/StudentLogin";
import ForgetPassword from "../components/student/forget-password/ForgetPassword";
import NewPassword from "../components/student/forget-password/NewPassword";
import Dashboard from "../components/student/dashboard/Dashboard";
import Footer from "../components/footer/Footer";
import Application from "../components/student/application/Application";
import Nav from "../components/student/dashboard/Nav";
import Bookmark from "../components/student/bookmark/Bookmark";
import Help from "../components/student/help/Help";
import Safety from "../components/safety/Safety";
import Contact from "../components/student/cantact/Contact";
import ChangePassword from "../components/student/change-password/ChangePassword";
import ChangeEmail from "../components/student/change-email/ChangeEmail";
import DeleteAccount from "../components/student/delete-account/DeleteAccount";
import Resume from "../components/resume/Resume";

import JobFrom from "../components/resume/form/JobForm";
import InternshipForm from "../components/resume/form/InternshipForm";
import TrainingForm from "../components/resume/form/TrainingForm";
import ProjectForm from "../components/resume/form/ProjectForm";
import AdditionalForm from "../components/resume/form/AdditionalForm";
import ResponsibilityForm from "../components/resume/form/ResponsibilityForm";
import PersonalDetailsForm from "../components/resume/form/PersonalDetailsForm";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoad } from "../store/actions/studentActions";

const StudentRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  // useEffect(() => {
    // dispatch(asyncLoad());

  //   isAuthenticated && navigate("/student/dashboard");
  //   !isAuthenticated && navigate("/student/signin");
  // }, [isAuthenticated]);

  return (
    <div className="w-full min-h-screen relative">
      {pathname == "/" ||
      pathname == "/student/resume/job" ||
      pathname == "/student/resume/internship" ||
      pathname == "/student/resume/training" ||
      pathname == "/student/resume/project" ||
      pathname == "/student/resume/accomplishment" ||
      pathname == "/student/resume/responsibility" ||
      pathname == "/student/resume/personal_details" ? (
        ""
      ) : (
        <Nav />
      )}
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/student/signup" element={<StudentRegister />} />
        <Route path="/employer/signup" element={<EmployerRegister />} />
        <Route path="/student/signin" element={<StudentLogin />} />
        <Route path="/employer/signin" element={<StudentLogin />} />
        <Route path="/student/forget_password" element={<ForgetPassword />} />
        <Route path="/student/forget-link/:userId" element={<NewPassword />} />
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
        <Route
          path="/student/resume/accomplishment"
          element={<AdditionalForm />}
        />
        <Route
          path="/student/resume/responsibility"
          element={<ResponsibilityForm />}
        />
        <Route
          path="/student/resume/personal_details"
          element={<PersonalDetailsForm />}
        />
      </Routes>

      {pathname == "/student/signup" ||
      pathname == "/student/signin" ||
      pathname == "/employer/signup" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default StudentRoutes;
