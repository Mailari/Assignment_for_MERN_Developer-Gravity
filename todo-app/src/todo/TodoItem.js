import React from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, title, completed } = todo;
  return (
    <div className="todo_item">
      <input
        className="check_box"
        defaultChecked={completed}
        type="checkbox"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <p className="task_title">{title}</p>

      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}
