import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo, filter } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
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
      ))}
    </ul>
  );
}