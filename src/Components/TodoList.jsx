import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  toggleComplete,
  removeTask,
  editTask,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
