import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

// function Assignment5() {
//   return (
//     <div>
//       <h1>Assignment 5</h1>
//       <a href="http://localhost:4000/a5/welcome">Welcome</a>
//       <EncodingParametersInURLs />
//       <WorkingWithObjects />
//       <br />
//       <WorkingWithArrays />
//     </div>
//   );
// }
// export default Assignment5;

function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;

  return (
    <div>
      <h1>Assignment 5</h1>
      <a href={`${API_BASE}/a5/welcome`}>Welcome</a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <br />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
