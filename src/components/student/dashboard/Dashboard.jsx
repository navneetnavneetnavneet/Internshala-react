import React from "react";
import StudentDetails from "./StudentDetails";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { student } = useSelector((state) => state.studentReducer);

  return (
    student && (
      <div className="w-full min-h-screen">
        <StudentDetails
          firstName={student.firstName}
          lastName={student.lastName}
        />
      </div>
    )
  );
};

export default Dashboard;
