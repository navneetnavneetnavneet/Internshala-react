import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  isAuthenticated: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    load: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = true;
    },
    remove: (state, action) => {
      state.student = null;
      state.isAuthenticated = false;
    },
  },
});

export const { load, remove } = studentSlice.actions;
export default studentSlice.reducer;
