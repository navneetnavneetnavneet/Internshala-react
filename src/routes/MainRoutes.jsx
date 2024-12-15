import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoad } from "../store/actions/studentActions";
import { asyncIsLoggedInEmployer } from "../store/actions/employerActions";

import Navbar from "../components/navbar/Navbar";
// student
import StudentLayout from "../components/student/StudentLayout";
import StudentRegister from "../components/student/register/StudentRegister";
import StudentLogin from "../components/student/login/StudentLogin";
import ForgetPassword from "../components/student/forget-password/ForgetPassword";
import NewPassword from "../components/student/forget-password/NewPassword";
import Application from "../components/student/application/Application";
import Bookmark from "../components/student/bookmark/Bookmark";
import Safety from "../components/student/safety/Safety";
import Help from "../components/student/help/Help";
import Contact from "../components/student/cantact/Contact";
import ChangePassword from "../components/student/change-password/ChangePassword";
import ChangeEmail from "../components/student/change-email/ChangeEmail";
import DeleteAccount from "../components/student/delete-account/DeleteAccount";
import Resume from "../components/resume/Resume";
import Dashboard from "../components/student/dashboard/Dashboard";

// employer
import EmployerLayout from "../components/employer/EmployerLayout";
import EmployerRegister from "../components/employer/employer-register/EmployerRegister";
import EmployerLogin from "../components/employer/employer-login/EmployerLogin";
import EmployerForgetPassword from "../components/employer/forget-password/EmployerForgetPassword";
import EmployerNewPassword from "../components/employer/forget-password/EmployerNewPassword";
import Profile from "../components/employer/employer-profile/Profile";
import EmployerUpdatePassword from "../components/employer/employer-change-password/EmployerUpdatePassword";
import EmployerDeleteAccount from "../components/employer/employer-delete-account/EmployerDeleteAccount";
import Footer from "../components/footer/Footer";

// resume
import JobForm from "../components/resume/form/JobForm";
import InternshipForm from "../components/resume/form/InternshipForm";
import TrainingForm from "../components/resume/form/TrainingForm";
import ProjectForm from "../components/resume/form/ProjectForm";
import AdditionalForm from "../components/resume/form/AdditionalForm";
import ResponsibilityForm from "../components/resume/form/ResponsibilityForm";
import PersonalDetailsForm from "../components/resume/form/PersonalDetailsForm";
import EditJobForm from "../components/resume/form/EditJobForm";
import EditInternshipForm from "../components/resume/form/EditInternshipForm";
import EditTrainingForm from "../components/resume/form/EditTrainingForm";
import EditProjectForm from "../components/resume/form/EditProjectForm";
import EditAdditionalForm from "../components/resume/form/EditAdditionalForm";
import EditResponsibilityForm from "../components/resume/form/EditResponsibilityForm";
import OrganizationDetails from "../components/employer/company-details/OrganizationDetails";
import Jobs from "../components/jobs/Jobs";
import JobDetails from "../components/jobs/job_details/JobDetails";
import Internships from "../components/internships/Internships";
import InternshipDetails from "../components/internships/InternshipDetails";
import CreateJob from "../components/employer/employer-create-job/CreateJob";

const MainRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, student } = useSelector(
    (state) => state.studentReducer
  );
  const { isLoggedIn, employer } = useSelector(
    (state) => state.employerReducer
  );

  useEffect(() => {
    dispatch(asyncIsLoggedInEmployer());
    dispatch(asyncLoad());

    if (student) {
      isAuthenticated ? navigate("/student/dashboard") : navigate("/");
    } else if (employer) {
      isLoggedIn ? navigate("/employer/profile") : navigate("/");
    }
  }, [isAuthenticated, isLoggedIn, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route path="/student/signup" element={<StudentRegister />} />
          <Route path="/student/signin" element={<StudentLogin />} />
          <Route path="/student/forget_password" element={<ForgetPassword />} />
          <Route
            path="/student/forget-link/:userId"
            element={<NewPassword />}
          />
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/application" element={<Application />} />
          <Route path="/student/bookmark" element={<Bookmark />} />
          <Route path="/student/safety" element={<Safety />} />
          <Route path="/student/help" element={<Help />} />
          <Route path="/student/contact" element={<Contact />} />
          <Route path="/student/change_password" element={<ChangePassword />} />
          <Route path="/student/change_email" element={<ChangeEmail />} />
          <Route path="/student/delete_account" element={<DeleteAccount />} />

          <Route path="/student/resume" element={<Resume />}>
            <Route path="/student/resume/job" element={<JobForm />} />
            <Route
              path="/student/resume/internship"
              element={<InternshipForm />}
            />
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
            <Route
              path="/student/resume/edit_job/:id"
              element={<EditJobForm />}
            />
            <Route
              path="/student/resume/edit_internship/:id"
              element={<EditInternshipForm />}
            />
            <Route
              path="/student/resume/edit_training/:id"
              element={<EditTrainingForm />}
            />
            <Route
              path="/student/resume/edit_project/:id"
              element={<EditProjectForm />}
            />
            <Route
              path="/student/resume/edit_accomplishment/:id"
              element={<EditAdditionalForm />}
            />
            <Route
              path="/student/resume/edit_responsibility/:id"
              element={<EditResponsibilityForm />}
            />
          </Route>
          {/* <Route path="/student/resume/education" element={<EducationDetails />} />
            <Route path="/student/resume/education/graduation" element={<GraduationForm />} />
            <Route path="/student/resume/education/senior_secondary" element={<SeniorSecondaryFrom />} />
            <Route path="/student/resume/education/secondary" element={<SecondaryForm />} />
            <Route path="/student/resume/education/diploma" element={<DiplomaForm />} />
            <Route path="/student/resume/education/phd" element={<PhdForm />} /> */}
        </Route>
        <Route path="/employer" element={<EmployerLayout />}>
          <Route path="/employer/signup" element={<EmployerRegister />} />
          <Route path="/employer/signin" element={<EmployerLogin />} />
          <Route
            path="/employer/forget_password"
            element={<EmployerForgetPassword />}
          />
          <Route
            path="/employer/forget-link/:employerId"
            element={<EmployerNewPassword />}
          />
          <Route path="/employer/profile" element={<Profile />} />
          <Route
            path="/employer/change_password"
            element={<EmployerUpdatePassword />}
          />
          <Route
            path="/employer/delete_account"
            element={<EmployerDeleteAccount />}
          />
          <Route path="/employer/company" element={<OrganizationDetails />} />
          <Route path="/employer/job" element={<CreateJob />} />
        </Route>

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/details/jobname" element={<JobDetails />} />

        <Route path="/internships" element={<Internships />} />
        <Route
          path="/internship/details/internship_name"
          element={<InternshipDetails />}
        />
      </Routes>
      {pathname == "/" ? <Footer /> : ""}
    </div>
  );
};

export default MainRoutes;
