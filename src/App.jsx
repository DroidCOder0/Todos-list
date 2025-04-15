import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import "./style.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all, completed, pending
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
          dueDate,
          priority,
          category,
          tags: tags.split(",").map((tag) => tag.trim()),
        },
      ]);
      setNewTask("");
      setDueDate("");
      setPriority("low");
      setCategory("");
      setTags("");
    }
  };

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const clearCompleted = () =>
    setTasks(tasks.filter((task) => !task.completed));

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (a.priority === "high") return -1;
    if (b.priority === "high") return 1;
    if (a.priority === "medium") return -1;
    return 1;
  });

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <h1>My To-Do List</h1>
      <TodoInput
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        dueDate={dueDate}
        setDueDate={setDueDate}
        priority={priority}
        setPriority={setPriority}
        category={category}
        setCategory={setCategory}
        tags={tags}
        setTags={setTags}
      />
      <TodoSearch search={search} setSearch={setSearch} />
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <button onClick={clearCompleted}>Clear Completed</button>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

      <TodoList
        tasks={sortedTasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
}
