import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";
import employerSlice from "./reducers/employerSlice";

export const store = configureStore({
  reducer: {
    studentReducer: studentSlice,
    employerReducer: employerSlice,
  },
});
