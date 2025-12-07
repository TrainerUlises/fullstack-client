import React from "react";

const NewCampusView = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Add a New Campus</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <br />

        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} required />

        <br />

        <label>Description:</label>
        <input type="text" name="description" onChange={handleChange} />

        <br /><br />

        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default NewCampusView;
