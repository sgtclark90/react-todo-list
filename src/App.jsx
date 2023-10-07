import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";

export default function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState(() => {
    // Initialize with data from local storage if available; otherwise, start with an empty array
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Side effect: Save todos to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  // Function to toggle the completed status of a todo
  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <>
      {/* Render the NewTodoForm component and pass the addTodo function as a prop */}
      <NewTodoForm onSubmit={addTodo} />

      {/* Render a header */}
      <h1 className="header">Todo List</h1>

      {/* Render the TodoList component and pass todos, toggleTodo, and deleteTodo as props */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}