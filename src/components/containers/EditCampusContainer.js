import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      description: ""
    };
  }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    // When Redux campus loads, sync form fields
    if (prevProps.campus.id !== this.props.campus.id) {
      this.setState({
        name: this.props.campus.name || "",
        address: this.props.campus.address || "",
        description: this.props.campus.description || ""
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const updatedCampus = {
      id: this.props.campus.id,
      ...this.state
    };

    await this.props.editCampus(updatedCampus);
    this.props.history.push(`/campus/${this.props.campus.id}`);
  };

  render() {
    return (
      <EditCampusView
        campus={this.props.campus}  // the real campus object (has id)
        formData={this.state}       // form fields user edits
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))
  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
