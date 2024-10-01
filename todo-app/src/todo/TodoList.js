import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, toggleTodo, deleteTodo } = props;

  return (
    <div>
      {todos.map((todo) => (
        <section key={todo.id}>
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          <hr className="margin_zero" />
        </section>
      ))}
      {todos.length > 0 ? "" : "No Tasks ...!"}
    </div>
  );
}
