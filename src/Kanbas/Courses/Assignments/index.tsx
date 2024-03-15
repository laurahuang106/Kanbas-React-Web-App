import React from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPlus,
} from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setDefaultAssignment,
  deleteAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );

  const handleDelete = (assignmentId: any) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to remove this assignment?"
    );
    if (isConfirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

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
          <button className="btn btn-light border me-1 py-1">+ Group</button>
          <button
            className="btn btn-danger border py-1 me-1"
            onClick={() => {
              dispatch(setDefaultAssignment());
              navigate(`/Kanbas/Courses/${courseId}/Assignments/New`);
            }}
          >
            + Assignment
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
            {assignmentList
              .filter((assignment) => assignment.course === courseId)
              .map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <button
                    className="btn btn-link"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(setAssignment(assignment));
                      navigate(
                        `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
                      );
                    }}
                  >
                    {assignment.title}
                  </button>
                  <span className="float-end">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleDelete(assignment._id)}
                    >
                      Delete
                    </button>
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
