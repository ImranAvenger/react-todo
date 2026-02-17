/**
 * ProgressBar Component: Calculates and displays the completion
 * percentage of the todo list with a smooth animated bar.
 */
export default function ProgressBar({ todoList }) {
  // 1. DATA CALCULATIONS
  const totalTasks = todoList.length;

  // Count only tasks where completed is true
  const completedTasks = todoList.filter((todo) => todo.completed).length;

  // 2. PERCENTAGE LOGIC:
  // Avoids Division by Zero errors; rounds to the nearest whole number.
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    /* ANIMATED CONTAINER: Entrance animation (fade and slide) on mount */
    <div className="mb-8 w-full animate-in fade-in slide-in-from-top duration-500">
      {/* LABEL SECTION: Shows task counts and the large percentage text */}
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-white text-sm font-semibold tracking-wide">
            Task Progress
          </h2>
          <p className="text-white/40 text-xs mt-0.5">
            {completedTasks} of {totalTasks} tasks completed
          </p>
        </div>
        <div className="text-right">
          {/* Large percentage display with heavy font weight */}
          <span className="text-xl font-black text-white drop-shadow-sm">
            {progress}%
          </span>
        </div>
      </div>

      {/* TRACK: The background "well" of the progress bar */}
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm p-0.5">
        {/* FILL: The actual colored bar that moves */}
        <div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          // INLINE STYLE: Controls the width dynamically based on state
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
