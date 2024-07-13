// import { useDispatch, useSelector } from "react-redux";
// import { asyncLoad } from "./store/actions/studentActions";
// import ForgetPassword from "./components/forget-password/ForgetPassword";
// import NewPassword from "./components/forget-password/NewPassword";
// import Profile from "./components/employ/employer-profile/Profile";
// import EmployerUpdatePassword from "./components/employ/employer-change-password/EmployerUpdatePassword";
// import EmployerDeleteAccount from "./components/employ/employer-delete-account/EmployerDeleteAccount";

import StudentRoutes from "./routes/StudentRoutes";


const App = () => {
  return (
    <div>
      <StudentRoutes />
    </div>
  );
};

export default App;
