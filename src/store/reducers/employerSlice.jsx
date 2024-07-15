import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employer: null,
  isLoggedIn: false,
};

export const employerSlice = createSlice({
  name: "employer",
  initialState,
  reducers: {
    isLoggedInEmployer: (state, action) => {
      state.employer = action.payload;
      state.isLoggedIn = true;
    },
    removedEmployer: (state, action) => {
      state.employer = null;
      state.isLoggedIn = false;
    },
  },
});

export const { isLoggedInEmployer, removedEmployer } = employerSlice.actions;
export default employerSlice.reducer;
