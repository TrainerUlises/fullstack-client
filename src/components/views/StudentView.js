/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
/*==================================================
StudentView.js
================================================== */

import { Link } from "react-router-dom";

const StudentView = ({ student }) => {
  if (!student || !student.id) return <h2>Loading...</h2>;

  const name = `${student.firstname} ${student.lastname}`;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>

      <img
        src={student.imageUrl}
        alt={name}
        style={{
          width: "180px",
          height: "auto",
          borderRadius: "10px",
          border: "1px solid #ccc",
          marginBottom: "15px"
        }}
      />

      <p><strong>Email:</strong> {student.email}</p>

      <p><strong>GPA:</strong> {student.gpa !== null ? student.gpa : "N/A"}</p>

      {student.campus ? (
        <h3>
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        </h3>
      ) : (
        <h3>No campus assigned</h3>
      )}

      <Link to={`/student/${student.id}/edit`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;