import React from "react";
import { Link } from "react-router-dom";

const StudentView = ({ student }) => {
  if (!student.id) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{student.firstName} {student.lastName}</h1>

      {/* Show campus or a helpful message */}
      {student.campus ? (
        <p>
          Enrolled at:{" "}
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        </p>
      ) : (
        <p style={{ color: "gray" }}>
          This student is not enrolled at a campus.
        </p>
      )}

      {/* Email */}
      <p><strong>Email:</strong> {student.email}</p>

      {/* GPA */}
      <p><strong>GPA:</strong> {student.gpa ?? "N/A"}</p>

      {/* Image */}
      <img
        src={student.imageUrl}
        alt="student"
        style={{ width: "160px", height: "160px", borderRadius: "10px" }}
      />

      {/* Edit button */}
      <br /><br />
      <Link to={`/student/${student.id}/edit`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;
