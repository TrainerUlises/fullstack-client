/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = ({ students, deleteStudent }) => {
  
  // If there are no students
  if (!students.length) {
    return (
      <div style={{ textAlign: "center" }}>
        <p>There are no students.</p>
        <Link to="/newstudent">
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Students</h1>

      {students.map((student) => {
        const name = `${student.firstname} ${student.lastname}`;

        return (
          <div key={student.id} style={{ marginBottom: "25px" }}>

            {/* Student Image */}
            <img
              src={student.imageUrl}
              alt={name}
              style={{
                width: "130px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: "10px"
              }}
            />

            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>

            <button
              onClick={() => deleteStudent(student.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

            <hr style={{ width: "60%", margin: "20px auto" }} />
          </div>
        );
      })}

      <Link to="/newstudent">
        <button>Add New Student</button>
      </Link>
      <br /><br />
    </div>
  );
};

export default AllStudentsView;