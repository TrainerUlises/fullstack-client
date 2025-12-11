import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";
import NewCampusView from "../views/NewCampusView";
import Header from "./Header";

class NewCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      errors: {}   // store validation messages
    };
  }

  // Update local state as the user types
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Validate input BEFORE submitting to DB
  validateForm = () => {
    let errors = {};

    if (!this.state.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!this.state.address.trim()) {
      errors.address = "Address is required.";
    }

    // description is optional, no validation needed

    this.setState({ errors });
    return Object.keys(errors).length === 0; // returns true if no errors
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Stop form submission if invalid
    if (!this.validateForm()) return;

    await this.props.addCampus({
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl || null
    });

    // Redirect to /campuses page
    this.props.history.push("/campuses");
  };

  render() {
    return (
      <div>
        <Header />
        <NewCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}       // pass error messages to the view
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(NewCampusContainer);
