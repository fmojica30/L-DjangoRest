import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, USER_LOADING } from "./types";

//action method get leads
export const getLeads = () => (dispatch, getState) => {
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
    .get("/api/leads/", config)
    .then(response => {
      dispatch({ type: GET_LEADS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteLead = id => (dispatch, getState) => {
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
    .delete(`/api/leads/${id}`, config)
    .then(response => {
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(err => console.log(err));
};

// Add lead
export const addLead = lead => (dispatch, getState) => {
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
    .post("/api/leads/", lead, config)
    .then(response => {
      dispatch({ type: ADD_LEAD, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};
