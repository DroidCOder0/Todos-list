function TodoItem({ todo, onRemove }) {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
