import TodoItem from "./TodoItem";

/**
 * TodoList Component: Responsible for rendering the list of tasks
 * or an empty state message if no tasks exist.
 */
export default function TodoList({ todoList, dispatch }) {
  // 1. DATA NORMALIZATION:
  // Checks if todoList is an object containing a 'todos' array,
  // or just an array itself. Defaults to an empty array to prevent crashes.
  const todos = todoList?.todos || todoList || [];

  return (
    <div className="mt-2 sm:mt-4">
      {/* 2. EMPTY STATE: Shown only when there are no tasks to display */}
      {todos.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 px-4 rounded-2xl bg-white/5 border border-dashed border-white/20 animate-pulse">
          <p className="text-white/40 text-base sm:text-lg font-medium tracking-wide italic">
            No tasks are there!
          </p>
          <span className="text-xs text-white/20 mt-2">
            Add something to get started 🚀
          </span>
        </div>
      )}

      {/* 3. LIST RENDERING: Maps through the tasks and renders a TodoItem for each */}
      {todos.map((item) => (
        <TodoItem
          key={item.id} // Unique key for React reconciliation
          item={item} // The task data (text, status, etc.)
          dispatch={dispatch} // Pass dispatch down to handle Edit/Delete/Toggle
        />
      ))}
    </div>
  );
}
