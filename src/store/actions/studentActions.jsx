import { load, remove } from "../reducers/studentSlice";
import axios from "../../utils/axios";

export const asyncLoad = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    console.log(data);
    dispatch(load(data));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncStudentSignup =
  ({ email, password, firstName, lastName }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      // console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncStudentSignin =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/signin", { email, password });
      // console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncStudentSignout = () => async () => {
  try {
    await axios.get("/student/signout");
    dispatch(remove());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncForgetPassword = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/sendmail", { email });
    dispatch({
      type: "URL_SEND_SUCCESS",
      payload: data,
    });
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncNewPassword =
  (userId, password) => async (dispatch, getState) => {
    try {
      console.log(password);
      const { data } = await axios.post(`/student/forget-link/${userId}`, {
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

// Only for loggedIn Student
export const asyncChangePassword = (password) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/reset-password/", { password });
    console.log(data);
    // dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncChangeEmail = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/change-email", { email });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncStudentDelete = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/delete");
    console.log(data);
    dispatch(remove());
  } catch (error) {
    console.log(error.response.data);
  }
};
