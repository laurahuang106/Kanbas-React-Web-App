import { Routes, Route, Link } from "react-router-dom";
import AddParam from "./Add";

function PathParameters() {
  return (
    <div>
      <h2>Path Parameters</h2>
      <Link to="/Labs/a3/add/1/2">1 + 2</Link> <br />
      <Link to="/Labs/a3/add/3/4">3 + 4</Link>
      <Routes>
        <Route path="a3/add/:a/:b" element={<AddParam />} />
      </Routes>
    </div>
  );
}
export default PathParameters;
