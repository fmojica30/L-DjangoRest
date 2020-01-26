import axios from "axios";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

//Check the token and load the user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: AUTH_ERROR });
    });
};

//LOGIN USER
export const login = (username, password) => dispatch => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({
    username: username,
    password: password
  });

  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: LOGIN_FAIL });
    });
};

// Lougout user
export const logout = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post("/api/auth/logout/", null, config)
    .then(res => {
      console.log("here");
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: AUTH_ERROR });
    });
};

export const registerUser = ({ username, password, email }) => (
  dispatch,
  getState
) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({
    username: username,
    password: password,
    email: email
  });

  axios
    .post("/api/auth/register", body, config)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: REGISTER_FAIL });
    });
};
