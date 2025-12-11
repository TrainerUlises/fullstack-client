/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
/*==================================================
CampusContainer.js
==================================================*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, fetchAllStudentsThunk, editStudentThunk } from "../../store/thunks";
import CampusView from "../views/CampusView";
import Header from "./Header";

class CampusContainer extends Component {

  async componentDidMount() {
    await this.props.fetchCampus(this.props.match.params.id);
    await this.props.fetchAllStudents();
  }

  handleEnroll = async (studentId, campusId) => {
    await this.props.editStudent({
      id: studentId,
      campusId: campusId
    });

    // Refresh page data
    await this.props.fetchCampus(this.props.match.params.id);
    await this.props.fetchAllStudents();
  };

  render() {
    return (
      <div>
        <Header />
        <CampusView
          campus={this.props.campus}
          allStudents={this.props.allStudents}
          handleEnroll={this.handleEnroll}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
  allStudents: state.allStudents
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  editStudent: (student) => dispatch(editStudentThunk(student))
});

export default connect(mapState, mapDispatch)(CampusContainer);
