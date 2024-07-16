import { load, remove } from "../reducers/studentSlice";
import axios from "../../utils/axios";

export const asyncLoad = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/student");
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
      const { data } = await axios.post("/user/student/signup", {
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
      const { data } = await axios.post("/user/student/signin", {
        email,
        password,
      });
      // console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncStudentSignout = () => async () => {
  try {
    await axios.get("/user/student/signout");
    dispatch(remove());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncForgetPassword = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/student/sendmail", { email });
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
      const { data } = await axios.post(`/user/student/forget-link/${userId}`, {
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
    const { data } = await axios.post("/user/student/reset-password/", {
      password,
    });
    console.log(data);
    // dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncChangeEmail = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/student/change-email", { email });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncStudentDelete = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/user/student/delete");
    console.log(data);
    dispatch(remove());
  } catch (error) {
    console.log(error.response.data);
  }
};

// job

export const asyncAddJob =
  ({
    designation,
    profile,
    organization,
    location,
    startDate,
    endDate,
    description,
  }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-job", {
        designation,
        profile,
        organization,
        location,
        startDate,
        endDate,
        description,
      });
      console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteJob = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`resume/delete-job/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

