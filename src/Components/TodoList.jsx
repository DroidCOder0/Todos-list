import TodoItem from "./TodoItem";

function TodoList({ todos, onRemove }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default TodoList;
