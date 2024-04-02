import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const [module, setModule] = useState({
    id: 1,
    name: "Module 1",
    description: "First week learning",
    course: "CS5620",
  });
  const MODULE_URL = "http://localhost:4000/a5/module";

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button className="btn btn-primary" onClick={updateTitle}>
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-primary" onClick={fetchAssignment}>
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-primary"
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        className="btn btn-primary"
      >
        Update Title
      </a>
      <input
        type="string"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <a
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        className="btn btn-primary ms-2"
      >
        Update Score
      </a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
        value={assignment.score}
      />
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        value={assignment.score}
        className="ms-3"
      />
      <a
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
        className="btn btn-primary ms-2"
      >
        Update Completed
      </a>

      <h3>Object Module</h3>
      <a
        href="http://localhost:4000/a5/module"
        className="btn btn-primary me-2"
      >
        Get Module
      </a>
      <a
        href="http://localhost:4000/a5/module/name"
        className="btn btn-primary"
      >
        Get Name
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
        Update Name
      </a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
    </div>
  );
}
export default WorkingWithObjects;
