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
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudentView";
import Header from "./Header";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);

    // Local component state to hold form values
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: "",
      campusId: "",
      loading: true,        // true until student data loads
      errorMessage: ""      // simple validation feedback
    };
  }

  /*--------------------------------------------------
    Component loads the student data when mounted.
    Once fetched from Redux, we pre-fill the form
    with the existing student information.
  --------------------------------------------------*/
  async componentDidMount() {
    await this.props.fetchStudent(this.props.match.params.id);

    const s = this.props.student;

    // Prepopulate form fields
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

  /*--------------------------------------------------
    Updates state whenever the user types in a form field
  --------------------------------------------------*/
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /*--------------------------------------------------
    Basic validation to prevent empty or invalid fields
  --------------------------------------------------*/
  validate = () => {
    if (!this.state.firstname.trim()) return "First name required.";
    if (!this.state.lastname.trim()) return "Last name required.";
    if (!this.state.email.includes("@")) return "Email must include '@'.";
    return "";
  };

  /*--------------------------------------------------
    Runs when the user submits the form.
    - Validates input
    - Sends updated student to backend
    - Redirects back to student view
  --------------------------------------------------*/
  handleSubmit = async (e) => {
    e.preventDefault();

    // Validate first
    let error = this.validate();
    if (error) {
      this.setState({ errorMessage: error });
      return;
    }

    // Construct updated student object
    const updatedStudent = {
      id: parseInt(this.props.match.params.id),
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl || null,
      gpa: this.state.gpa || null,
      campusId: Number(this.state.campusId)
    };

    // Send to backend
    await this.props.editStudent(updatedStudent);

    // Redirect to student page
    this.props.history.push(`/student/${updatedStudent.id}`);
  };

  render() {
    // Prevent rendering form until student data is loaded
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <div>
        <Header />
        <EditStudentView
          student={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

/*--------------------------------------------------
  MAP STATE: Pulls the single student from Redux store
--------------------------------------------------*/
const mapState = (state) => ({
  student: state.student
});

/*--------------------------------------------------
  MAP DISPATCH: Makes thunks available as props
--------------------------------------------------*/
const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student))
});

export default connect(mapState, mapDispatch)(EditStudentContainer);
