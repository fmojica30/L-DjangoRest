import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";

const Leads = props => {
  useEffect(() => {
    props.get_leads();
  }, []);

  return (
    <Fragment>
      <h2>Leads List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.leads.map(lead => {
            return (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={() => {
                      props.delete_lead(lead.id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  leads: state.leads.leads
});

const mapDispatchToProps = dispatch => ({
  get_leads: () => dispatch(getLeads()),
  delete_lead: id => dispatch(deleteLead(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
