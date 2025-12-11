/*==================================================
AllCampusesView.js

================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const AllCampusesView = (props) => {
  const { allCampuses, deleteCampus } = props;

=======
const AllCampusesView = ({ allCampuses, deleteCampus }) => {
  
>>>>>>> b8b8a9c48735157ca4c44279afeedbc7ba5baff6
  if (!allCampuses.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>There are no campuses.</h2>
  
        <Link to="/newcampus">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Add New Campus
          </button>
        </Link>
      </div>
    );
  }
  

  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id} style={{ marginBottom: "25px" }}>

          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>

          {/* 📸 Campus Image */}
          <img
            src={campus.imageUrl}
            alt={`${campus.name} logo`}
            style={{
              width: "180px",
              height: "auto",
              borderRadius: "6px",
              marginBottom: "10px",
              border: "1px solid #ccc"
            }}
          />

          <p><strong>Campus ID:</strong> {campus.id}</p>
          <p>{campus.address}</p>
          <p>{campus.description}</p>

          {/* DELETE BUTTON */}
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

      <br />
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>

      <br /><br />
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

export default AllCampusesView;
