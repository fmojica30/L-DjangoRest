import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";

const Register = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const pass1 = password;
    const pass2 = password2;
    if (pass1 !== pass2) {
      alert("Check yo passwords");
    } else {
      const newUser = {
        username: username,
        password: password,
        email: email
      };
      props.onRegister(newUser);
      console.log("submit");
    }
  };
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={event => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={event => setPassword2(event.target.value)}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(registerUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
