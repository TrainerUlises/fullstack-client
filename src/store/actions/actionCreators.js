import * as at from "./actionTypes";

// ---------------- C A M P U S E S ----------------

// All campuses
export const fetchAllCampuses = (campuses) => ({
  type: at.FETCH_ALL_CAMPUSES,
  payload: campuses,
});

// Single campus
export const fetchCampus = (campus) => ({
  type: at.FETCH_CAMPUS,
  payload: campus,
});

// Add campus
export const addCampus = (campus) => ({
  type: at.ADD_CAMPUS,
  payload: campus,
});

// ---------------- S T U D E N T S ----------------

// All students
export const fetchAllStudents = (students) => ({
  type: at.FETCH_ALL_STUDENTS,
  payload: students,
});

// Add student
export const addStudent = (student) => ({
  type: at.ADD_STUDENT,
  payload: student,
});

// Delete student
export const deleteStudent = (studentId) => ({
  type: at.DELETE_STUDENT,
  payload: studentId,
});

// Edit student
export const editStudent = (student) => ({
  type: at.EDIT_STUDENT,
  payload: student,
});

// Single student
export const fetchStudent = (student) => ({
  type: at.FETCH_STUDENT,
  payload: student,
});

export const editCampus = (campus) => {
  return {
    type: at.EDIT_CAMPUS,
    payload: campus,
  };
};

// Delete campus action
export const deleteCampus = (campusId) => {
  return {
    type: at.DELETE_CAMPUS,
    payload: campusId,
  };
};
