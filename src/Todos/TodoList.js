import { useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";

const TodoList = ({
  todos,
  setTodos
}) => {
  const onChange = (id) => {
    let newTodos = todos.map((todo) => {
      if(todo.id !== id) return todo;
      todo.checked = !todo.checked;
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <div className="todolist-app">
      <AddTodo todos={todos} setTodo={setTodo} />
      {todos.length > 0 && todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" onChange={() => onChange(todo.id)} value={todo.checked} />
          <li>{todo.id}</li>
          <Link to={"/" + todo.id}>{todo.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;