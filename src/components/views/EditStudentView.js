/*==================================================
EditStudentView.js

This is the presentation (View) component.
It receives:
- the student data to display in the form
- event handlers for input changes & submission
- an errorMessage (if validation fails)

It contains NO business logic.
==================================================*/

import Button from '@material-ui/core/Button';

const EditStudentView = (props) => {
  const { student, campuses, handleChange, handleSubmit, errorMessage } = props;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Edit Student</h1>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>

        <label>First Name:</label><br />
        <input
          name="firstname"
          value={student.firstname}
          onChange={handleChange}
        /><br /><br />

        <label>Last Name:</label><br />
        <input
          name="lastname"
          value={student.lastname}
          onChange={handleChange}
        /><br /><br />

        <label>Email:</label><br />
        <input
          name="email"
          value={student.email}
          onChange={handleChange}
        /><br /><br />

        <label>Image URL:</label><br />
        <input
          name="imageUrl"
          value={student.imageUrl}
          onChange={handleChange}
        /><br /><br />

        <label>GPA (0–4):</label><br />
        <input
          name="gpa"
          type="number"
          min="0"
          max="4"
          step="0.1"
          value={student.gpa}
          onChange={handleChange}
        /><br /><br />

        {/* CAMPUS DROPDOWN */}
        <label>Assign to Campus:</label><br />
        <select
          name="campusId"
          value={student.campusId || ""}
          onChange={handleChange}
          style={{ padding: "6px", width: "200px" }}
        >
          <option value="">— Unassigned —</option>

          {campuses.map((campus) => (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>

        <br /><br />

        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditStudentView;