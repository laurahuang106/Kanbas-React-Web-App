import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import courses from "../Database/courses.json";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <>
      <h1 className="ms-3 text-danger">
        <HiMiniBars3 /> Course {course?.name}
      </h1>
      <hr />

      <CourseNavigation />

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "80px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Assignments/New" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

      {/* <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre> */}
    </>
  );
}

export default Courses;
