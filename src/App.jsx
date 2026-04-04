import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFilters from "./components/TodoFilters.jsx";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </>
  );
}

export default App;