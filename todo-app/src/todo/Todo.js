import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./addTodo";
import Filter from "./Filter";
import useLocalStorage from "../customHooks/useLocalStorage";
import "./todo.css";
const TodoApp = () => {
  const [todos, setTodos] = useLocalStorage("todoList", []);

  const [filter, setFilter] = useState("all");

  const addTodo = (title) => {
    const todo_list = [
      ...todos,
      { id: Date.now().toLocaleString(), title, completed: false },
    ];

    setTodos(todo_list);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id, checked) => {
    const updated_todo_list = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: checked } : todo
    );
    setTodos(updated_todo_list);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="todo_app">
      <h1>Todo App</h1>
      <div className="header">
        <AddTodo addTodo={addTodo} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <hr />
      <TodoList
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        todos={filteredTodos}
      />
    </div>
  );
};

export default TodoApp;
