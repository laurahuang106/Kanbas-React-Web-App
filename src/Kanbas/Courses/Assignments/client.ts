import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const updateAssignment = async (assignment: any) => {
    const response = await axios.
      put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
  };  

export const deleteAssignment = async (assignmentId: String) => {
    const response = await axios
      .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  };
  
export const createAssignment = async (courseId: String, assignment: String) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };
  
export const findAssignmentsForCourse = async (courseId: String) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};


