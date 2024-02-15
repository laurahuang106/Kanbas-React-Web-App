import { Module } from "module";
import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import courses from "../Database/courses.json";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <>
      <h1>
        <HiMiniBars3 /> Course {course?.name}
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
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
