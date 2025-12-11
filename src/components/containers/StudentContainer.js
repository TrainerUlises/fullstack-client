/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { fetchStudentThunk } from "../../store/thunks";
import StudentView from "../views/StudentView";

class StudentContainer extends Component {

  componentDidMount() {
    // Get student ID from URL parameters when component loads
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Header />
        <StudentView student={this.props.student} />
      </div>
    );
  }
}

// Map Redux state to component props
const mapState = (state) => ({
  student: state.student
});

// Map dispatch (thunks) to props
const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id))
});

// Connect component to Redux store
export default connect(mapState, mapDispatch)(StudentContainer);