/*==================================================
NewStudentContainer.js
Handles logic for creating a new student:
- Manages form state
- Basic validation
- Calls addStudentThunk
- Redirects on success
==================================================*/

import Header from "./Header";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewStudentView from "../views/NewStudentView";
import { addStudentThunk } from "../../store/thunks";

class NewStudentContainer extends Component {
  constructor(props) {
    super(props);

    // Component state for input fields
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: "",
      campusId: "",
      redirect: false,
      redirectId: null,
      errorMessage: "" // Used for simple validation feedback
    };
  }

  // Update state when form inputs change
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Minimal Validation (Option A)
  validateInputs = () => {
    if (!this.state.firstName.trim()) {
      return "First name is required.";
    }
    if (!this.state.lastName.trim()) {
      return "Last name is required.";
    }
    if (!this.state.email.trim()) {
      return "Email is required.";
    }
    if (!this.state.email.includes("@")) {
      return "Email must include '@'.";
    }
    if (!this.state.campusId) {
      return "Campus ID is required.";
    }
    return ""; // No errors
  };

  // Handle form submission
  handleSubmit = async (event) => {
    event.preventDefault();

    // Run validation
    const error = this.validateInputs();
    if (error) {
      this.setState({ errorMessage: error });
      return;
    }

    // Construct new student object
    let student = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      imageUrl: this.state.imageUrl || null,
      gpa: this.state.gpa || null,
      campusId: Number(this.state.campusId)
    };
    

    // Send student to backend
    let newStudent = await this.props.addStudent(student);

    // Redirect to new student's page
    if (newStudent) {
      this.setState({
        redirect: true,
        redirectId: newStudent.id
      });
    } else {
      this.setState({ errorMessage: "Failed to create student. Check required fields." });
    }
    
  };

  componentWillUnmount() {
    this.setState({
      redirect: false,
      redirectId: null,
      errorMessage: ""
    });
  }

  render() {
    // Redirect after successful submit
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage} // pass error to view
        />
      </div>
    );
  }
}

// Connect component to Redux
const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student))
  };
};

export default connect(null, mapDispatch)(NewStudentContainer);
