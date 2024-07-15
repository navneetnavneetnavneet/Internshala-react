// import { useDispatch, useSelector } from "react-redux";
// import { asyncLoad } from "./store/actions/studentActions";
// import ForgetPassword from "./components/forget-password/ForgetPassword";
// import NewPassword from "./components/forget-password/NewPassword";
// import Profile from "./components/employ/employer-profile/Profile";
// import EmployerUpdatePassword from "./components/employ/employer-change-password/EmployerUpdatePassword";
// import EmployerDeleteAccount from "./components/employ/employer-delete-account/EmployerDeleteAccount";

import { Route, Routes } from "react-router-dom";
import StudentRoutes from "./routes/StudentRoutes";
import EmployerRoutes from "./routes/EmployerRoutes";

const App = () => {
  return (
    <div>
      <EmployerRoutes />
    </div>
  );
};

export default App;
