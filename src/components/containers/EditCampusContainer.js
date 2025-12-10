/*==================================================
 EditCampusContainer.js — 
==================================================*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
import Header from "./Header";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      description: "",
      errorMessage: ""  // <-- validation error message here
    };
  }

  // Fetch campus on load
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  // Prefill form once campus data is loaded
  componentDidUpdate(prevProps) {
    if (prevProps.campus.id !== this.props.campus.id) {
      this.setState({
        name: this.props.campus.name || "",
        address: this.props.campus.address || "",
        description: this.props.campus.description || ""
      });
    }
  }

  // Handle user typing
  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value,
      errorMessage: ""   // clear errors as user types
    });
  };

  /*--------------------------------------------------
     VALIDATION FUNCTION
     Returns a string error message if invalid,
     Returns "" if all inputs are valid.
  --------------------------------------------------*/
  validateInputs = () => {
    if (!this.state.name.trim()) return "Campus name cannot be empty.";
    if (!this.state.address.trim()) return "Campus address cannot be empty.";
    if (!this.state.description.trim()) return "Campus description cannot be empty.";
    return "";
  };

  /*--------------------------------------------------
    Submit handler with validation
  --------------------------------------------------*/
  handleSubmit = async (event) => {
    event.preventDefault();

    // Validate before submitting
    const error = this.validateInputs();
    if (error) {
      this.setState({ errorMessage: error });
      return; // stop here → do NOT submit invalid data
    }

    const updatedCampus = {
      id: this.props.campus.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description
    };

    await this.props.editCampus(updatedCampus);

    // Redirect to updated campus page
    this.props.history.push(`/campus/${this.props.campus.id}`);
  };

  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <EditCampusView
        campus={this.props.campus}
        formData={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errorMessage={this.state.errorMessage}   // pass error to view
      />
    );
  }
}

const mapState = (state) => ({
  campus: state.campus
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus))
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
