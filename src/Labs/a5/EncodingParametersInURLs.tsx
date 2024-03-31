import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const API_BASE = process.env.REACT_APP_API_BASE + "/a5";

  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const [result, setResult] = useState(0);
  const fetchWelcome = async () => {
    const response = await axios.get(`${API_BASE}/welcome`);
    setWelcome(response.data);
  };
  const fetchSum = async (a: number, b: number) => {
    const response = await axios.get(`${API_BASE}/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(`${API_BASE}/subtract/${a}/${b}`);
    setResult(response.data);
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setB(Number(e.target.value))}
        value={b}
      />
      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button className="btn btn-primary" onClick={() => fetchSum(a, b)}>
        Fetch Sum of {a} + {b}
      </button>
      <button className="btn btn-danger" onClick={() => fetchSubtraction(a, b)}>
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      <a href={`${API_BASE}/add/${a}/${b}`} className="btn btn-primary me-2">
        Add {a} + {b}
      </a>
      <a href={`${API_BASE}/subtract/${a}/${b}`} className="btn btn-danger">
        Substract {a} - {b}
      </a>

      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary me-2"
        href={`${API_BASE}/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger"
        href={`${API_BASE}/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;
