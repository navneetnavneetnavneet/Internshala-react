import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  isAuthenticated: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    load: (state, actions) => {
      state.student = actions.payload;
      state.isAuthenticated = true;
    },
    remove: (state, actions) => {
      state.student = null;
      state.isAuthenticated = false;
    },
  },
});

export const { load, remove } = studentSlice.actions;
export default studentSlice.reducer;
