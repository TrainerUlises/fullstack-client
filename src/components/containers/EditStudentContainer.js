/*==================================================
EditStudentContainer.js

This container handles:
- Fetching a single student
- Pre-filling form fields with existing data
- Updating internal state as the user types
- Validating inputs before sending to backend
- Calling editStudentThunk to update DB
- Redirecting back to student page after saving
==================================================*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudentView";
import Header from "./Header";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: "",
      campusId: "",
      loading: true,
      errorMessage: ""
    };
  }

  async componentDidMount() {
    const studentId = this.props.match.params.id;

    // Load single student
    await this.props.fetchStudent(studentId);

    // Load campuses for dropdown
    await this.props.fetchAllCampuses();

    const s = this.props.student;

    // Pre-fill form
    this.setState({
      firstname: s.firstname,
      lastname: s.lastname,
      email: s.email || "",
      imageUrl: s.imageUrl || "",
      gpa: s.gpa || "",
      campusId: s.campusId || "",
      loading: false
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    if (!this.state.firstname.trim()) return "First name required.";
    if (!this.state.lastname.trim()) return "Last name required.";
    if (!this.state.email.includes("@")) return "Email must include '@'.";
    return "";
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const error = this.validate();
    if (error) {
      this.setState({ errorMessage: error });
      return;
    }

    const updatedStudent = {
      id: parseInt(this.props.match.params.id),
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl || null,
      gpa: this.state.gpa || null,
      campusId: this.state.campusId === "" ? null : Number(this.state.campusId),
    };

    await this.props.editStudent(updatedStudent);

    // Redirect back to that student’s page
    this.props.history.push(`/student/${updatedStudent.id}`);
  };

  render() {
    if (this.state.loading) return <h2>Loading...</h2>;

    return (
      <div>
        <Header />

        <EditStudentView
          student={this.state}
          campuses={this.props.allCampuses}   
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
  allCampuses: state.allCampuses
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  editStudent: (student) => dispatch(editStudentThunk(student))
});

export default connect(mapState, mapDispatch)(EditStudentContainer);