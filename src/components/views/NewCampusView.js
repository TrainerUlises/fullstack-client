import React from "react";

const NewCampusView = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div>
      <h1>Add a New Campus</h1>

      <form onSubmit={handleSubmit}>

        {/* NAME FIELD */}
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        {errors.name && (
          <p style={{ color: "red", margin: 0 }}>{errors.name}</p>
        )}

        <br />

        {/* ADDRESS FIELD */}
        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} />
        {errors.address && (
          <p style={{ color: "red", margin: 0 }}>{errors.address}</p>
        )}

        <br />

        {/* DESCRIPTION FIELD */}
        <label>Description:</label>
        <input type="text" name="description" onChange={handleChange} />

        <br /><br />

        <label>Image URL:</label>
        <input type="text" name="imageUrl" onChange={handleChange} placeholder="Optional" />
        <br />


        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default NewCampusView;
