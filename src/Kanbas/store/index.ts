import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import modulesReducer from "../Courses/Modules/reducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});

export default store;