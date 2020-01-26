import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "../leads/Dashboard";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  let page;

  if (auth.isAuthenticated) {
    page = <Route exact path="/" component={Dashboard} />;
  } else {
    page = <Redirect to="/login" />;
  }

  return page;
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
