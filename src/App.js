import { useState } from "react";
import { Routes, Route } from "react-router-dom"

import TodoDetail from "./Todos/TodoDetail";
import Todo from "./Todos/TodoDetail";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "first",
      content: "this is first content",
      checked: false
    },
    {
      id: 2,
      name: "second",
      content: "this is second content",
      checked: false
    }
  ]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <TodoList todos={todos} setTodos={setTodos} /> } />
        <Route path="/:id" element={ <TodoDetail todos={todos} /> } />
      </Routes>
    </div>
  );
}

export default App;
