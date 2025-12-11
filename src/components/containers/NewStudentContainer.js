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

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: "",
      campusId: "",   // optional
      redirect: false,
      redirectId: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    // Extract ?campusId=#
    const params = new URLSearchParams(this.props.location.search);
    const campusIdFromURL = params.get("campusId");

    if (campusIdFromURL) {
      this.setState({ campusId: campusIdFromURL });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateInputs = () => {
    if (!this.state.firstName.trim()) return "First name is required.";
    if (!this.state.lastName.trim()) return "Last name is required.";
    if (!this.state.email.trim()) return "Email is required.";
    if (!this.state.email.includes("@")) return "Email must include '@'.";
    return "";
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const error = this.validateInputs();
    if (error) {
      this.setState({ errorMessage: error });
      return;
    }

    const student = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      imageUrl: this.state.imageUrl || null,
      gpa: this.state.gpa || null,
      campusId: this.state.campusId === "" ? null : Number(this.state.campusId),
    };

    let newStudent = await this.props.addStudent(student);

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
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage}
          campusId={this.state.campusId}   // <-- pass to view
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentThunk(student))
});

export default connect(null, mapDispatch)(NewStudentContainer);