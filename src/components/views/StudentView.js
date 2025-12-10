/*==================================================
StudentView.js

Displays a single student.
Added:
- Edit Student button linking to /student/:id/edit
==================================================*/

import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Guard: prevent crash when data hasn't loaded yet
  if (!student || !student.campus) return <div>Loading...</div>;

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>

      {/* Show campus name */}
      <h3>{student.campus.name}</h3>

      {/* Link to Edit Student page */}
      <Link to={`/student/${student.id}/edit`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;
