import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)}>❌</button>
    </li>
  );
};

export default React.memo(TodoItem);