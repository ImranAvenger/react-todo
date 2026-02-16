import { MdOutlineDelete } from "react-icons/md";

export default function TodoItem({ item, dispatch }) {
  return (
    <div className="group flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/10 transition-all duration-300 shadow-sm mb-3">
      {/* বাম দিকে চেকবক্স এবং টেক্সট */}
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-purple-500 rounded border-none outline-none"
          checked={item.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: item })}
        />

        <li
          className={`list-none text-lg font-medium transition-all duration-500 ${
            item.completed ? "line-through text-white/40 italic" : "text-white"
          }`}
        >
          {item.text}
        </li>
      </div>

      {/* ডান দিকে ডিলিট বাটন */}
      <button
        className="text-white/50 hover:text-red-400 p-2 rounded-full hover:bg-red-500/10 transition-colors duration-200"
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: item })}
        title="Delete task"
      >
        <MdOutlineDelete size={22} />
      </button>
    </div>
  );
}
