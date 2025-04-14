import { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
