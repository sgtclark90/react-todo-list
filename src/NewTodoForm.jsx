import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  // State to manage the value of the new todo item input field
  const [newItem, setNewItem] = useState("");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Check if the new item is empty; if so, return without doing anything
    if (newItem === "") return;

    // Call the onSubmit function (passed as a prop) with the new item as an argument
    onSubmit(newItem);

    // Clear the input field by resetting the state
    setNewItem("");
  }

  return (
    // Render a form with an onSubmit event handler
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        {/* Label for the input field */}
        <label htmlFor="item">New Item</label>

        {/* Input field for entering a new todo item */}
        <input
          value={newItem}
          // When the input value changes, update the state with the new value
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>

      {/* Button to submit the form */}
      <button className="btn">Add</button>
    </form>
  );
}