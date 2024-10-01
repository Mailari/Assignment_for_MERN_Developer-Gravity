import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./addTodo";
import Filter from "./Filter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoApp from "./Todo";

test("renders input field for adding a new task", () => {
  render(<AddTodo addTodo={jest.fn()} />);
  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  expect(inputElement).toBeInTheDocument();
});

test("updates input value when typing", () => {
  render(<AddTodo addTodo={jest.fn()} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);

  fireEvent.change(inputElement, { target: { value: "Learn React" } });
  expect(inputElement.value).toBe("Learn React");
});

test("does not call addTodo with just white spaces", () => {
  const addTodoMock = jest.fn();
  render(<AddTodo addTodo={addTodoMock} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const submitButton = screen.getByText(/add/i);

  fireEvent.change(inputElement, { target: { value: "   " } });
  fireEvent.click(submitButton);

  expect(addTodoMock).not.toHaveBeenCalled();
});

test("renders filter dropdown with correct options", () => {
  const { getByLabelText } = render(
    <Filter filter="all" setFilter={() => {}} />
  );
  const dropdown = getByLabelText(/filter/i);
  expect(dropdown.value).toBe("all");
  expect(dropdown).toHaveTextContent("All");
  expect(dropdown).toHaveTextContent("Completed");
  expect(dropdown).toHaveTextContent("Pending");
});

test("render todo item with title,checkbox and delete button ", () => {
  render(
    <TodoItem
      deleteTodo={jest.fn()}
      toggleTodo={jest.fn()}
      todo={{
        id: 1,
        title: "title",
        completed: false,
      }}
    />
  );
  const titleElement = screen.getByText("title");
  const deleteButton = screen.getByText("Delete");

  expect(titleElement).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});

test("renders a list of todo items", () => {
  const todos = [
    { id: 1, title: "Test Task 1", completed: false },
    { id: 2, title: "Test Task 2", completed: true },
  ];

  const { getByText } = render(
    <TodoList todos={todos} toggleTodo={() => {}} deleteTodo={() => {}} />
  );

  expect(getByText(/Test Task 1/i)).toBeInTheDocument();
  expect(getByText(/Test Task 2/i)).toBeInTheDocument();
});

test("displays 'No Tasks ...!' when there are no todos", () => {
  const { getByText } = render(
    <TodoList todos={[]} toggleTodo={() => {}} deleteTodo={() => {}} />
  );
  expect(getByText(/No Tasks ...!/i)).toBeInTheDocument();
});

test("adds a new todo item", () => {
  const { getByPlaceholderText, getByText } = render(<TodoApp />);

  const input = getByPlaceholderText("Add a new task");
  const addButton = getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);
  expect(getByText(/New Task/i)).toBeInTheDocument();
});
