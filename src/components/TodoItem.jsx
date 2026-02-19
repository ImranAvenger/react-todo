import { MdOutlineDelete } from "react-icons/md";
import { PRIORITY_CONFIG } from "../utils/priority";

const LABEL = { High: "High", Medium: "Med", Low: "Low" };

export default function TodoItem({ item, dispatch }) {
  const priorityCfg = PRIORITY_CONFIG[item.priority] ?? PRIORITY_CONFIG.Medium;

  return (
    <div className="group flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 transition-all duration-300 shadow-sm mb-2 sm:mb-3 gap-2 sm:gap-3">
      {/* LEFT: Checkbox and Task Text */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-purple-500 shrink-0 border-none outline-none"
          checked={item.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: item })}
          title={item.completed ? "Mark as incomplete" : "Mark as complete"}
        />
        <li
          className={`list-none text-sm sm:text-base font-medium transition-all duration-500 wrap-break-word overflow-hidden flex-1 ${
            item.completed
              ? "line-through text-white/30 italic"
              : "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          }`}
        >
          {item.text}
        </li>
      </div>

      {/* PRIORITY BADGE */}
      <span
        className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-black uppercase border transition-opacity duration-500 ${priorityCfg.activeCls} ${item.completed ? "opacity-30" : ""}`}
        title={`Priority: ${item.priority ?? "Medium"}`}
      >
        {LABEL[item.priority] ?? "Med"}
      </span>

      {/* DELETE */}
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
