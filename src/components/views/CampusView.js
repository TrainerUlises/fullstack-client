/*==================================================
CampusView.js
Displays a campus + its students + image + enroll form
==================================================*/

import { Link } from "react-router-dom";

const CampusView = ({ campus }) => {

  if (!campus || !campus.id) {
    return <h2>Loading campus...</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      {/* Campus Name */}
      <h1>{campus.name}</h1>

      {/* Campus Image */}
      {campus.imageUrl && (
        <img
          src={campus.imageUrl}
          alt={`${campus.name} campus`}
          style={{ width: "260px", borderRadius: "10px", margin: "15px 0" }}
        />
      )}

      <p>{campus.address}</p>
      <p>{campus.description}</p>

      {/* Edit Campus Button */}
      <Link to={`/campus/${campus.id}/edit`}>
        <button style={{ marginTop: "10px" }}>Edit Campus</button>
      </Link>

      {/* Add Student Button */}
      <div style={{ marginTop: "12px" }}>
        <Link to={`/newstudent?campusId=${campus.id}`}>
          <button>Add New Student to This Campus</button>
        </Link>
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* Students Section */}
      <h2>Students Enrolled</h2>

      {(!campus.students || campus.students.length === 0) && (
        <p>No students currently enrolled.</p>
      )}

      {campus.students &&
        campus.students.map((student) => {
          const fullName = `${student.firstname} ${student.lastname}`;
          return (
            <div key={student.id} style={{ marginBottom: "12px" }}>
              <Link to={`/student/${student.id}`}>
                <h3 style={{ color: "#4B0082" }}>{fullName}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CampusView;
