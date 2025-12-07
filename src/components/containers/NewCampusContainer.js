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
      description: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.addCampus(this.state);
    this.props.history.push("/campuses");  // redirect after adding
  };

  render() {
    return (
      <div>
        <Header />
        <NewCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus))
  };
};

export default connect(null, mapDispatch)(NewCampusContainer);
