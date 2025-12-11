import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
<<<<<<< HEAD
=======

>>>>>>> b8b8a9c48735157ca4c44279afeedbc7ba5baff6

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
<<<<<<< HEAD
      description: ""
=======
      description: "",
      imageUrl:"",
      errorMessage: ""  // <-- validation error message here
>>>>>>> b8b8a9c48735157ca4c44279afeedbc7ba5baff6
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
        description: this.props.campus.description || "",
        imageUrl: this.props.campus.imageUrl || ""
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
<<<<<<< HEAD
      ...this.state
=======
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl || null
>>>>>>> b8b8a9c48735157ca4c44279afeedbc7ba5baff6
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
