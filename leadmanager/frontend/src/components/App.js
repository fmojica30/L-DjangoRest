import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import store from "../store";
import Login from "../components/Accounts/Login";
import Register from "../components/Accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    console.log(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute
                  exact
                  path="/"
                  component={Dashboard}
                  auth={store.getState().isAuthenticated}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
