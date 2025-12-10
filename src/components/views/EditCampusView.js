/*==================================================
 EditCampusView.js

 The view is responsible ONLY for displaying the form.
 All logic (fetching, updating, validation) happens in
 the container. This keeps Views clean + reusable.

 Props:
 - campus: original campus object (id, name, address…)
 - formData: editable local state from container
 - handleChange: updates local state as user types
 - handleSubmit: submits the form
==================================================*/

import React from "react";

const EditCampusView = ({ campus, formData, handleChange, handleSubmit, errorMessage }) => {

  if (!campus.id) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Campus</h1>

      {/* 🔴 Display validation error if it exists */}
      {errorMessage && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Address: </label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description: </label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCampusView;