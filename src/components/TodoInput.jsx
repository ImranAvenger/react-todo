import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  PRIORITIES,
  PRIORITY_CONFIG,
  DEFAULT_PRIORITY,
} from "../utils/priority";

export default function TodoInput({ dispatch }) {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState(DEFAULT_PRIORITY);

  const handleAddTodo = (e) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
        priority,
      },
    });

    setInputValue("");
    setPriority(DEFAULT_PRIORITY);
  };

  return (
    <div className="sl-form-mb mb-4 sm:mb-6">
      {/* Text input row */}
      <form
        onSubmit={handleAddTodo}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-2 pl-4 rounded-xl flex items-center shadow-lg focus-within:bg-white/20 focus-within:border-white/40 transition-all duration-300"
      >
        <input
          className="focus:outline-none flex-1 min-w-0 bg-transparent text-white placeholder:text-white/40 text-sm sm:text-base lg:text-lg font-medium"
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

      {/* Priority selector row */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest shrink-0">
          Priority
        </span>
        <div className="flex gap-1.5">
          {PRIORITIES.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriority(p)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border transition-all cursor-pointer
                ${priority === p
                  ? PRIORITY_CONFIG[p].activeCls
                  : "text-white/30 border-white/10 hover:text-white/60"
                }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
