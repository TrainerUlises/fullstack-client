/*==================================================
EditCampusContainer.js
Handles:
- Fetching the existing campus
- Managing form state
- Handling validation
- Calling editCampusThunk
- Redirecting after save
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
      loading: true,      // Wait until initial data is loaded
      errorMessage: ""    // For simple validation
    };
  }

  /* Load campus data when component first mounts */
  async componentDidMount() {
    await this.props.fetchCampus(this.props.match.params.id);

    // Pre-fill form with existing data
    this.setState({
      name: this.props.campus.name,
      address: this.props.campus.address,
      description: this.props.campus.description || "",
      loading: false
    });
  }

  /* Update local state when user types */
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /* Simple validation */
  validateInputs = () => {
    if (!this.state.name.trim()) return "Name is required.";
    if (!this.state.address.trim()) return "Address is required.";
    return "";
  };

  /* Handle save/submit */
  handleSubmit = async (event) => {
    event.preventDefault();

    const error = this.validateInputs();
    if (error) {
      this.setState({ errorMessage: error });
      return;
    }

    const updatedCampus = {
      id: this.props.campus.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description
    };

    await this.props.editCampus(updatedCampus);

    // redirect back to campus page
    this.props.history.push(`/campus/${this.props.campus.id}`);
  };

  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <div>
        <Header />
        <EditCampusView
          campus={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

/* Redux connections */
const mapState = (state) => ({
  campus: state.campus
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus))
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
