import React, { useState } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";

const Form = props => {
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredMessage, setMessage] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const lead = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage
    };
    props.onAddLead(lead);
    resetFields();
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={event => setName(event.target.value)}
              value={enteredName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={event => setEmail(event.target.value)}
              value={enteredEmail}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={event => setMessage(event.target.value)}
              value={enteredMessage}
            />
          </div>
          <div className="form-group">
            <button type="onSubmit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddLead: lead => dispatch(addLead(lead))
});
export default connect(null, mapDispatchToProps)(Form);
