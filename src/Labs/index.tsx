import { Routes, Route, Link } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";

function Labs() {
  return (
    <div>
      <div className="container-fluid">
        <h1>Labs</h1>
        <Nav />
        <nav className="nav nav-tabs mt-2">
          <Link to="/Labs/a3" className="nav-link">
            Assignment 3
          </Link>{" "}
          <Link to="/Labs/a4" className="nav-link">
            Assignment 4
          </Link>
        </nav>
        <Routes>
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Labs;
