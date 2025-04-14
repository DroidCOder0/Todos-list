import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} />
    </div>
  );
}

export default App;
