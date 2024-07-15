import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../components/employer/navbar/Navbar";
import Profile from "../components/employer/employer-profile/Profile";
import Footer from "../components/employer/footer/Footer";
import EmployerUpdatePassword from "../components/employer/employer-change-password/EmployerUpdatePassword";
import EmployerDeleteAccount from "../components/employer/employer-delete-account/EmployerDeleteAccount";
import { useDispatch, useSelector } from "react-redux";
import { asyncIsLoggedInEmployer } from "../store/actions/employerActions";

const EmployerRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.employerReducer);
  console.log(isLoggedIn);

  useEffect(() => {
    dispatch(asyncIsLoggedInEmployer());

    isLoggedIn && navigate("/employer/profile");
    !isLoggedIn && navigate(-1);
  }, [isLoggedIn]);

  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <Routes>
        <Route path="/employer/profile" element={<Profile />} />
        <Route
          path="/employer/change_password"
          element={<EmployerUpdatePassword />}
        />
        <Route
          path="/employer/delete_account"
          element={<EmployerDeleteAccount />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default EmployerRoutes;
