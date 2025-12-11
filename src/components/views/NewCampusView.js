/*==================================================
NewCampusView.js
==================================================*/

import React from "react";

const inputStyle = {
  marginBottom: "10px",
  padding: "6px",
  width: "250px",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-8px",
  marginBottom: "10px",
};

const NewCampusView = (props) => {
  const {
    name,
    address,
    description,
    imageUrl,
    errors,
    isValid,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add a New Campus</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <input
            style={inputStyle}
            type="text"
            placeholder="Campus Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}
        </div>

        {/* Address */}
        <div>
          <input
            style={inputStyle}
            type="text"
            placeholder="Campus Address"
            name="address"
            value={address}
            onChange={handleChange}
          />
          {errors.address && <div style={errorStyle}>{errors.address}</div>}
        </div>

        {/* Description */}
        <div>
          <input
            style={inputStyle}
            type="text"
            placeholder="Description (optional)"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>

        {/* Image URL */}
        <div>
          <input
            style={inputStyle}
            type="text"
            placeholder="Image URL (optional)"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
          />
          {errors.imageUrl && <div style={errorStyle}>{errors.imageUrl}</div>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            marginTop: "15px",
            padding: "8px 14px",
            cursor: isValid ? "pointer" : "not-allowed",
            backgroundColor: isValid ? "#4CAF50" : "gray",
            color: "white",
            borderRadius: "6px",
            border: "none",
          }}
        >
          Add Campus
        </button>
      </form>
    </div>
  );
};

export default NewCampusView;
