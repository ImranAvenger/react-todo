import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function TodoInput({ dispatch }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
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
    <div className="mb-2 border-black border-2 py-2 px-2 rounded-lg flex items-center">
      <input
        className="focus:outline-none flex-1"
        value={inputValue}
        placeholder="add task"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="cursor-pointer flex items-center justify-center"
        onClick={handleAddTodo}
      >
        <IoMdAdd size={24} />
      </button>
    </div>
  );
}
