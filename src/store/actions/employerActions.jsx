import axios from "../../utils/axios";
import { isLoggedInEmployer, removedEmployer } from "../reducers/employerSlice";

export const asyncIsLoggedInEmployer = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    console.log(data);
    data && dispatch(isLoggedInEmployer(data));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncEmployerSignup =
  ({ email, password, firstName, lastName, contact }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/employe/signup", {
        email,
        password,
        firstName,
        lastName,
        contact,
      });
      //   console.log(data);
      dispatch(asyncIsLoggedInEmployer());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEmployerSignin =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/employe/signin", {
        email,
        password,
      });
      //   console.log(data);
      dispatch(asyncIsLoggedInEmployer());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEmployerSignout = () => async (dispatch, getState) => {
  try {
    await axios.get("/employe/signout");
    dispatch(removedEmployer());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncEmployerForgetPassword =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/employe/sendmail", { email });
      dispatch({
        type: "URL_SEND_SUCCESS",
        payload: data,
      });
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEmployerNewPassword =
  (employerId, password) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/employe/forget-link/${employerId}`, {
        password,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEmployerEditProfile =
  ({
    firstName,
    lastName,
    email,
    contact,
    designation,
    organizationName,
    organizationDescription,
    organizationCity,
    industry,
    numberOfEmployees,
    organizationLogo,
  }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/employe/update",
        {
          firstName,
          lastName,
          email,
          contact,
          designation,
          organizationName,
          organizationDescription,
          organizationCity,
          industry,
          numberOfEmployees,
          organizationLogo,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(asyncIsLoggedInEmployer());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEmployerChnagePassword =
  (password) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/employe/reset-password", {
        password,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEmployerDeleteAccount = () => async (dispatch, getState) => {
  try {
    await axios.get("/employe/delete");
    dispatch(removedEmployer());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncCreateInternship =
  (internshipDetails) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/employe/internship/create",
        internshipDetails
      );
      await dispatch(asyncIsLoggedInEmployer());
      // console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncCreateJob = (jobDetails) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/job/create", jobDetails);
    await dispatch(asyncIsLoggedInEmployer());
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
