import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

//action method get leads
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(response => {
      dispatch({ type: GET_LEADS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}`)
    .then(response => {
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(err => console.log(err));
};

// Add lead
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(response => {
      dispatch({ type: ADD_LEAD, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};
