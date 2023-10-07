import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    // Render an unordered list for the todo items
    <ul className="list">
      {/* Display "No Todos" if the todos array is empty */}
      {todos.length === 0 && "No Todos"}

      {/* Map over the todos array and render a TodoItem component for each todo */}
      {todos.map((todo) => {
        return (
          <TodoItem
            // Spread all properties of the todo object as props to the TodoItem component
            {...todo}
            key={todo.id}
            // Pass the toggleTodo and deleteTodo functions as props to TodoItem
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}