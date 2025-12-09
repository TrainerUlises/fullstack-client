/*==================================================
/src/components/containers/AllCampusesContainer.js

Container for AllCampusesView.
Fetches all campuses and passes data + delete handler to the view.
================================================== */

import Header from './Header';
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Import thunks
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../store/thunks";

// Import the corresponding View
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {

  // Fetch all campuses from the backend when component loads
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // Render AllCampusesView
  render() {
    return (
      <div>
        <Header />
        <AllCampusesView
          allCampuses={this.props.allCampuses}

          // Pass delete function to the View
          deleteCampus={this.props.deleteCampus}
        />
      </div>
    );
  }
}

/*========================================
  MAP STATE
  Pulls campus list from Redux store
========================================*/
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

/*========================================
  MAP DISPATCH
  Provides functions that dispatch thunks
  to the Redux store.
========================================*/
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),

    // NEW: Delete a campus
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
  };
};

// Prop validation
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired,   // NEW
};

// Connect container to Redux store
export default connect(mapState, mapDispatch)(AllCampusesContainer);
