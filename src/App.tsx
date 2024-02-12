import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { has } from "immer/dist/internal";
// if not index.tsx, then need to specify as ./Labs/home.tsx
import Labs from "./Labs"; // default to import ./Labs/index.tsx,
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";

function App() {
  return (
    <div>
      <HelloWorld />
      <Labs />
      <Kanbas />
    </div>
  );
}

export default App;
