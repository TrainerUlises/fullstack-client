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
      errors: {},
      isValid: false,
    };
  }

  // VALIDATION LOGIC
  validateField = (fieldName, value) => {
    let errors = { ...this.state.errors };

    if (fieldName === "name") {
      if (!value.trim()) errors.name = "Campus name is required.";
      else delete errors.name;
    }

    if (fieldName === "address") {
      if (!value.trim()) errors.address = "Address is required.";
      else delete errors.address;
    }

    if (fieldName === "imageUrl") {
      if (value && !value.startsWith("http")) {
        errors.imageUrl = "URL must start with http or https.";
      } else {
        delete errors.imageUrl;
      }
    }

    this.setState({ errors }, this.updateFormValidity);
  };

  updateFormValidity = () => {
    const { name, address, errors } = this.state;
    const isValid = name.trim() && address.trim() && Object.keys(errors).length === 0;
    this.setState({ isValid });
  };

  // Update local state AS user types
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(
      { [name]: value },
      () => this.validateField(name, value) // validate real-time
    );
  };

  // Submit after validation
  handleSubmit = async (event) => {
    event.preventDefault();

    if (!this.state.isValid) return;

    const payload = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl || "https://via.placeholder.com/300",
    };

    await this.props.addCampus(payload);

    this.props.history.push("/campuses");
  };

  render() {
    return (
      <div>
        <Header />
        <NewCampusView
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
          imageUrl={this.state.imageUrl}
          errors={this.state.errors}
          isValid={this.state.isValid}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainer);