// src/App.jsx
import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: "1.5rem", fontFamily: "sans-serif" }}>
      <h1>GitHub User Search App</h1>
      <Search />
    </div>
  );
}

export default App;
