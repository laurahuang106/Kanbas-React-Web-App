import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const assignments = db.assignments
const defaultAssignment = { _id: "A222", title: "New Assignment 123", description: "New Assignment Description", points: 100, }

const initialState = {
  assignments: assignments,
  assignment: defaultAssignment,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // // dynamically render assignments based on course_id
    // setFilteredAssignments: (state, action) => {
    //     state.assignments = db.assignments.filter(
    //       (assignment) => assignment.course === action.payload
    //     );
    //   },
    
    // setDefaultAssignment: (state) => {
    //     state.assignment = defaultAssignment
    // },

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
    // updateAssignment: (state, action) => {
    //   state.assignments = state.assignments.map((assignment) => {
    //     if (assignment._id === action.payload._id) {
    //         return action.payload;
    //       } else {
    //         return assignment;
    //       }
    //     });
    //   },
    //   setAssignment: (state, action) => {
    //     state.assignment = action.payload;
    //   },

    updateAssignment: (state, action) => {
        const index = state.assignments.findIndex(assignment => assignment._id === action.payload._id);
        if (index !== -1) {
            console.log("action payload",action.payload )
          // Update existing assignment
          state.assignments[index] = action.payload;
        } else {
            
          // Add new assignment
          const newAssignment = {
            ...action.payload,
            _id: new Date().getTime().toString()
          };
          state.assignments.unshift(newAssignment); // Add to the start of the array
        }
        console.log("state assignments", state.assignments )
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  
  
//   export const {setFilteredAssignments, setDefaultAssignment, addAssignment, deleteAssignment,
//     updateAssignment, setAssignment } = assignmentsSlice.actions;

  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;