import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

/**
 * TodoInput Component: A form to capture user input and
 * dispatch the "ADD_TODO" action to the main state.
 */
export default function TodoInput({ dispatch }) {
  // 1. LOCAL STATE: Tracks the text being typed in the input field
  const [inputValue, setInputValue] = useState("");

  // 2. SUBMIT HANDLER: Validates and processes the new task
  const handleAddTodo = (e) => {
    // Prevent page refresh on form submission
    if (e) e.preventDefault();

    // Prevent adding empty tasks or tasks with only spaces
    if (inputValue.trim() === "") return;

    // Create a new Todo object with a unique ID and default status
    const newTodo = {
      id: crypto.randomUUID(), // Modern browser API for generating unique IDs
      text: inputValue,
      completed: false,
    };

    // Send the new task to the reducer in App.js
    dispatch({ type: "ADD_TODO", payload: newTodo });

    // Clear the input field after successful addition
    setInputValue("");
  };

  return (
    /* FORM CONTAINER: Styled with glassmorphism and focus-aware borders */
    <form
      onSubmit={handleAddTodo}
      className="mb-4 sm:mb-6 bg-white/10 backdrop-blur-md border border-white/20 p-2 pl-4 rounded-xl flex items-center shadow-lg focus-within:bg-white/20 focus-within:border-white/40 transition-all duration-300"
    >
      {/* INPUT FIELD: Controlled component linked to 'inputValue' state */}
      <input
        className="focus:outline-none flex-1 min-w-0 bg-transparent text-white placeholder:text-white/40 text-sm sm:text-base lg:text-lg font-medium"
        value={inputValue}
        placeholder="Add a new task..."
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* SUBMIT BUTTON: Visual feedback on click using active:scale-90 */}
      <button
        type="submit"
        className="cursor-pointer shrink-0 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all active:scale-90 flex items-center justify-center ml-2 shadow-sm"
        title="Add task"
      >
        <IoMdAdd size={24} />
      </button>
    </form>
  );
}
