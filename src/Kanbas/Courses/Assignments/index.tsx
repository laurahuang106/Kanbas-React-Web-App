import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <input
          type="text"
          className="form-control me-1"
          placeholder="Search for Assignments"
          style={{ width: "40%" }}
        />
        <div className="float-end">
          <button className="btn btn-light border me-1 py-1">
            <i className="fa-solid fa-plus"></i> Group
          </button>
          <button className="btn btn-danger border py-1 me-1">
            <i className="fa-solid fa-plus"></i> Assignment
          </button>
          <button className="btn btn-light border px-2 py-1 me-1">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
