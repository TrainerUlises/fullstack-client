/*==================================================
AllCampusesView.js

This View renders all campuses.
Now updated to include a Delete button for each campus.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses, deleteCampus } = props;

  // If there are no campuses in the list
  if (!allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id} style={{ marginBottom: "25px" }}>
          {/* Clicking the name goes to the single campus view */}
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>

          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>

          {/* DELETE BUTTON — calls the thunk through props */}
          <button
            onClick={() => deleteCampus(campus.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Delete Campus
          </button>

          <hr />
        </div>
      ))}

      {/* Button for adding a new campus */}
      <br />
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>

      <br /><br />
    </div>
  );
};

// Validate props
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  deleteCampus: PropTypes.func.isRequired,   // added validation
};

export default AllCampusesView;
