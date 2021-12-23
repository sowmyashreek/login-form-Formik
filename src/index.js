import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
