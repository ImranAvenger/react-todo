import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function TodoInput({ dispatch }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue,
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="mb-6 bg-white/10 backdrop-blur-md border border-white/20 p-2 pl-4 rounded-xl flex items-center shadow-lg focus-within:bg-white/20 focus-within:border-white/40 transition-all duration-300"
    >
      <input
        className="focus:outline-none flex-1 min-w-0 bg-transparent text-white placeholder:text-white/40 text-lg font-medium"
        value={inputValue}
        placeholder="Add a new task..."
        onChange={(e) => setInputValue(e.target.value)}
      />
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
