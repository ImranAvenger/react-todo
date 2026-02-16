import { MdOutlineDelete } from "react-icons/md";

export default function TodoItem({ item, dispatch }) {
  return (
    <div className="group flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/20 transition-all duration-300 shadow-lg mb-3 gap-3">
      {/* বাম দিকে চেকবক্স এবং টেক্সট */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-purple-500 shrink-0 border-none rounded-md"
          checked={item.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: item })}
        />

        <li
          className={`list-none text-lg font-semibold tracking-wide transition-all duration-500 break-words overflow-hidden ${
            item.completed
              ? "line-through text-white/30 italic"
              : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          }`}
        >
          {item.text}
        </li>
      </div>

      {/* ডান দিকে ডিলিট বাটন */}
      <button
        className="shrink-0 text-white/60 hover:text-red-400 p-2 rounded-full hover:bg-red-500/20 transition-all duration-200"
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: item })}
        title="Delete task"
      >
        <MdOutlineDelete size={24} />
      </button>
    </div>
  );
}
