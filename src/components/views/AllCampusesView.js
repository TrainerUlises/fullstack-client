/*==================================================
  AllCampusesView.js

  This View renders:
    • A list of all campuses
    • A campus thumbnail image (if it exists)
    • Link to each campus page
    • Delete button for each campus
    • "Add New Campus" button

  Receives data from AllCampusesContainer.
==================================================*/

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses, deleteCampus }) => {
  
  // If the list is empty
  if (!allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div 
          key={campus.id} 
          style={{
            marginBottom: "35px",
            padding: "20px",
          }}
        >

          {/* Campus Name */}
          <Link to={`/campus/${campus.id}`}>
            <h2 style={{ color: "#4B0082" }}>{campus.name}</h2>
          </Link>

          {/* Campus Thumbnail */}
          {campus.imageUrl && (
            <img
              src={campus.imageUrl}
              alt={`${campus.name} campus`}
              style={{
                width: "180px",
                borderRadius: "8px",
                margin: "10px 0",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}

          {/* Campus Info */}
          <h4>Campus ID: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>

          {/* Delete Button */}
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

          <hr style={{ marginTop: "30px" }} />
        </div>
      ))}

      {/* Add Campus Button */}
      <Link to={`/newcampus`}>
        <button
          style={{
            marginTop: "20px",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add New Campus
        </button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

export default AllCampusesView;
