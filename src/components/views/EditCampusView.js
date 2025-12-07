import React from "react";

const EditCampusView = ({ campus, formData, handleChange, handleSubmit }) => {

  if (!campus.id) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Campus</h1>

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
