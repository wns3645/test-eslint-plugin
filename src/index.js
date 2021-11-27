import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { getUser } from "./actions";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
