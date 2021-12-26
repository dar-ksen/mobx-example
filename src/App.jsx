import React from "react";
import Counter from "./Counter";
import Todo from "./Todo";

function App(props) {
  return (
    <div className="app">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
