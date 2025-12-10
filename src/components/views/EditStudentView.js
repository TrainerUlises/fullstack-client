/*==================================================
EditStudentView.js

This is the presentation (View) component.
It receives:
- the student data to display in the form
- event handlers for input changes & submission
- an errorMessage (if validation fails)

It contains NO business logic.
==================================================*/

import React from "react";

const EditStudentView = ({ student, handleChange, handleSubmit, errorMessage }) => {
  return (
    <div>
      <h1>Edit Student</h1>

      {/* Display validation errors in red */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Form for editing student */}
      <form onSubmit={handleSubmit}>
        
        {/* FIRST NAME */}
        <label>First Name:</label><br/>
        <input
          name="firstname"
          value={student.firstname}
          onChange={handleChange}
        />
        <br/><br/>

        {/* LAST NAME */}
        <label>Last Name:</label><br/>
        <input
          name="lastname"
          value={student.lastname}
          onChange={handleChange}
        />
        <br/><br/>

        {/* EMAIL */}
        <label>Email:</label><br/>
        <input
          name="email"
          value={student.email}
          onChange={handleChange}
        />
        <br/><br/>

        {/* IMAGE URL */}
        <label>Image URL:</label><br/>
        <input
          name="imageUrl"
          value={student.imageUrl}
          onChange={handleChange}
        />
        <br/><br/>

        {/* GPA */}
        <label>GPA:</label><br/>
        <input
          name="gpa"
          value={student.gpa}
          type="number"
          onChange={handleChange}
        />
        <br/><br/>

        {/* CAMPUS ID */}
        <label>Campus ID:</label><br/>
        <input
          name="campusId"
          value={student.campusId}
          onChange={handleChange}
        />
        <br/><br/>

        {/* SUBMIT BUTTON */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditStudentView;
