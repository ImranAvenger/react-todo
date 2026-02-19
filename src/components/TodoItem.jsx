import { MdOutlineDelete } from "react-icons/md";

/**
 * TodoItem Component: Represents a single task row.
 * Includes a completion checkbox, the task text, and a delete action.
 */
export default function TodoItem({ item, dispatch }) {
  return (
    /* ITEM CONTAINER: Styled with glassmorphism, hover effects, and smooth transitions */
    <div className="group flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 transition-all duration-300 shadow-sm mb-2 sm:mb-3 gap-2 sm:gap-3">
      {/* LEFT SECTION: Checkbox and Task Text */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        {/* CHECKBOX: Toggles the "completed" status via the reducer */}
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-purple-500 shrink-0 border-none outline-none"
          checked={item.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: item })}
          title={item.completed ? "Mark as incomplete" : "Mark as complete"}
        />

        {/* TASK TEXT: Dynamically changes style based on completion status */}
        <li
          className={`list-none text-sm sm:text-base font-medium transition-all duration-500 wrap-break-word overflow-hidden flex-1 ${
            item.completed
              ? "line-through text-white/30 italic" // Finished task style
              : "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" // Active task style
          }`}
        >
          {item.text}
        </li>
      </div>

      {/* RIGHT SECTION: Delete Action */}
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
