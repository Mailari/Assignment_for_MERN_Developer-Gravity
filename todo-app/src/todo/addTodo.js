import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="add_todo" onSubmit={handleSubmit}>
        <input
          className="task_input"
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add_button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
