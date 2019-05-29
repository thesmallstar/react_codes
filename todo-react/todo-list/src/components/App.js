import React from "react";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
