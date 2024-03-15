import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const assignments = db.assignments
const defaultAssignment = {title: "New Assignment 123", description: "New Assignment Description", points: 100, }

const initialState = {
  assignments: assignments,
  assignment: defaultAssignment,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {    
    setDefaultAssignment: (state) => {
        state.assignment = defaultAssignment
    },

    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },

    },
  });
  
  
  export const {setDefaultAssignment, addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;

  export default assignmentsSlice.reducer;