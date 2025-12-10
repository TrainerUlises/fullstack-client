/*==================================================
CampusView.js
Displays a single campus + its students + image.
==================================================*/

import { Link } from "react-router-dom";

const CampusView = ({ campus }) => {
  
  // While data is loading
  if (!campus || !campus.id) {
    return <h2>Loading campus...</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{campus.name}</h1>

      {/* Campus Image */}
      {campus.imageUrl && (
        <img
          src={campus.imageUrl}
          alt={`${campus.name} logo`}
          style={{
            width: "220px",
            borderRadius: "6px",
            marginBottom: "15px",
            border: "1px solid #ccc"
          }}
        />
      )}

      <p>{campus.address}</p>
      <p>{campus.description}</p>

      {/* Edit Campus Button */}
      <Link to={`/campus/${campus.id}/edit`}>
        <button>Edit Campus</button>
      </Link>

      <hr />

      {/* Students Section */}
      <h2>Students Enrolled</h2>

      {campus.students && campus.students.length > 0 ? (
        campus.students.map((student) => (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h3>{student.firstname} {student.lastname}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>No students enrolled at this campus.</p>
      )}
    </div>
  );
};

export default CampusView;
