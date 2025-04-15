import React, { useState } from "react";

export default function TodoItem({
  task,
  toggleComplete,
  removeTask,
  editTask,
}) {
  const { id, text, completed, dueDate, priority, category, tags } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const isOverdue = new Date(dueDate) < new Date() && !completed;

  const handleEdit = () => {
    editTask(id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`task-item ${completed ? "completed" : ""} ${
        isOverdue ? "overdue" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{newText}</span>
      )}
      <div>
        <span>Due: {dueDate}</span>
        <span>Priority: {priority}</span>
        <span>Category: {category}</span>
        <span>Tags: {tags.join(", ")}</span>
      </div>
      <button onClick={() => removeTask(id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      {isEditing && <button onClick={handleEdit}>Save</button>}
    </li>
  );
}
