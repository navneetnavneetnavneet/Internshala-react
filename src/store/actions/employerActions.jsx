import axios from "../../utils/axios";
import { isLoggedInEmployer, removedEmployer } from "../reducers/employerSlice";

export const asyncIsLoggedInEmployer = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("employe/current");
    console.log(data);
    dispatch(isLoggedInEmployer(data));
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
      console.log(data);
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
      console.log(data);
      dispatch(asyncIsLoggedInEmployer());
    } catch (error) {
      console.log(error.response.data);
    }
  };
