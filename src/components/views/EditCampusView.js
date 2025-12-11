/*==================================================
EditCampusView.js
================================================== */

import React from "react";

const EditCampusView = ({ campus, formData, handleChange, handleSubmit }) => {

  if (!campus || !campus.id) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Edit Campus</h1>

      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>

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

        <div>
          <label>Image URL: </label>
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">Save Changes</button>

      </form>
    </div>
  );
};

export default EditCampusView;
