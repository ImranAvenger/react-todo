import { MdOutlineDelete } from "react-icons/md";

export default function TodoItem({ item, dispatch }) {
  return (
    <div className="group flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/10 transition-all duration-300 shadow-sm mb-3 gap-3">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-purple-500 shrink-0 border-none outline-none"
          checked={item.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: item })}
          title={item.completed ? "Mark as incomplete" : "Mark as complete"}
        />

        <li
          className={`list-none text-lg font-medium transition-all duration-500 wrap-break-word overflow-hidden flex-1 ${
            item.completed
              ? "line-through text-white/30 italic"
              : "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          }`}
        >
          {item.text}
        </li>
      </div>

      <button
        className="shrink-0 text-white/50 hover:text-red-400 cursor-pointer p-2 rounded-full hover:bg-red-500/10 transition-colors duration-200"
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: item })}
        title="Delete task"
      >
        <MdOutlineDelete size={22} />
      </button>
    </div>
  );
}
