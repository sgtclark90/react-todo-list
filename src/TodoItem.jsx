export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    // Render a list item for a todo item
    <li>
      <label>
        {/* Checkbox input for marking a todo item as completed */}
        <input
          type="checkbox"
          checked={completed}
          // When the checkbox value changes, call the toggleTodo function with the todo's id and the new completed status
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {/* Display the title of the todo item */}
        {title}
      </label>

      {/* Button to delete the todo item */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}