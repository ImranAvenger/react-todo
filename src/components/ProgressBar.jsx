export default function ProgressBar({ todoList }) {
  const totalTasks = todoList.length;
  const completedTasks = todoList.filter((todo) => todo.completed).length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  if (totalTasks === 0) return null;

  return (
    <div className="mb-8 w-full animate-in fade-in slide-in-from-top duration-500">
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
          <span className="text-xl font-black text-white drop-shadow-sm">
            {progress}%
          </span>
        </div>
      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm p-0.5">
        <div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
