/*==================================================
EditCampusView.js
Displays a form for editing a campus
==================================================*/

import React from "react";

const EditCampusView = ({ campus, handleChange, handleSubmit, errorMessage }) => {
  return (
    <div>
      <h1>Edit Campus</h1>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input
          name="name"
          value={campus.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Address:</label><br/>
        <input
          name="address"
          value={campus.address}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Description:</label><br/>
        <textarea
          name="description"
          value={campus.description}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCampusView;
