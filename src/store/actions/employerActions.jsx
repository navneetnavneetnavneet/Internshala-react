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


export const asyncEmployerSignout = () => async (dispatch, getState) => {
    try {
       await axios.get("/employe/signout");
       dispatch(removedEmployer()); 
    } catch (error) {
        console.log(error.response.data);
    }
}

export const asyncEmployerDeleteAccount = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/employe/delete");
        console.log(data);
        dispatch(removedEmployer());
    } catch (error) {
        console.log(error.response.data);
    }
}