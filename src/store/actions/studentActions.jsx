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

export const asyncStudentUpdate =
  ({ firstName, lastName, profileImage, email, contact, city, gender }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/user/student/update", {
        firstName,
        lastName,
        profileImage,
        email,
        contact,
        city,
        gender,
      });
      console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

// education
export const asyncAddGraduation =
  ({ college, startYear, endYear, degree, stream, performance }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-edu", {
        college,
        startYear,
        endYear,
        degree,
        stream,
        performance,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditGraduation =
  (id, { college, startYear, endYear, degree, stream, performance }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-edu/${id}`, {
        college,
        startYear,
        endYear,
        degree,
        stream,
        performance,
      });
      // console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteGraduation = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-edu/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAddSeniorSecondary =
  ({ complete, board, performance, stream, school }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-edu", {
        complete,
        board,
        performance,
        stream,
        school,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditSeniorSecondary =
  (id, { complete, board, performance, stream, school }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/add-edu/${id}`, {
        complete,
        board,
        performance,
        stream,
        school,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncAddSecondary =
  ({ complete, board, performance, school }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-edu", {
        complete,
        board,
        performance,
        school,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditSecondary =
  (id, { complete, board, performance, school }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-edu/${id}`, {
        complete,
        board,
        performance,
        school,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncAddDiploma =
  ({ college, startYear, endYear, stream, performance }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-edu", {
        college,
        startYear,
        endYear,
        stream,
        performance,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditDiploma =
  (id, { college, startYear, endYear, stream, performance }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-edu/${id}`, {
        college,
        startYear,
        endYear,
        stream,
        performance,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncAddPhd =
  ({ college, startYear, endYear, stream, performance }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-edu", {
        college,
        startYear,
        endYear,
        stream,
        performance,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditPhd =
  (id, { college, startYear, endYear, stream, performance }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-edu/${id}`, {
        college,
        startYear,
        endYear,
        stream,
        performance,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

// education end

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

export const asyncEditJob =
  (
    id,
    {
      designation,
      profile,
      organization,
      location,
      startDate,
      endDate,
      description,
    }
  ) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-job/${id}`, {
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
    await axios.post(`/resume/delete-job/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAddInternship =
  ({ profile, organization, location, startDate, endDate, description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-internship", {
        profile,
        organization,
        location,
        startDate,
        endDate,
        description,
      });
      // console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditInternship =
  (id, { profile, organization, location, startDate, endDate, description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-internship/${id}`, {
        profile,
        organization,
        location,
        startDate,
        endDate,
        description,
      });
      // console.log(data);
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteInternship = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-internship/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAddResponsibilty =
  ({ description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-responsibilitie", {
        description,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditResponsibilty =
  (id, { description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-responsibilitie/${id}`, {
        description,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteResponsibilty = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-responsibilitie/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAddCourse =
  ({ program, organization, location, startDate, endDate, description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-course", {
        program,
        organization,
        location,
        startDate,
        endDate,
        description,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditCourse =
  (id, { program, organization, location, startDate, endDate, description }) =>
  async (dispatch, getState) => {
    try {
      const data = await axios.post(`/resume/edit-course/${id}`, {
        program,
        organization,
        location,
        startDate,
        endDate,
        description,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteCourse = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-course/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAddProject =
  ({ title, startDate, endDate, description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-project", {
        title,
        startDate,
        endDate,
        description,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditProject =
  (id, { title, startDate, endDate, description }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-project/${id}`, {
        title,
        startDate,
        endDate,
        description,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteProject = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-project/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAddAccomplishment =
  ({ accomplishment }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/resume/add-accomplishment", {
        accomplishment,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditAccomplishment =
  (id, { accomplishment }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/resume/edit-accomplishment/${id}`, {
        accomplishment,
      });
      dispatch(asyncLoad());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncDeleteAccomplishment = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-accomplishment/${id}`);
    dispatch(asyncLoad());
  } catch (error) {
    console.log(error.response.data);
  }
};
