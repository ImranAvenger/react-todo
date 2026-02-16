import TodoItem from "./TodoItem";

export default function TodoList({ todoList, dispatch }) {
  const todos = todoList?.todos || todoList || [];

  return (
    <div className="space-y-3 mt-4">
      {todos.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 px-4 rounded-2xl bg-white/5 border border-dashed border-white/20 animate-pulse">
          <p className="text-white/40 text-lg font-medium tracking-wide italic">
            No tasks are there!
          </p>
          <span className="text-xs text-white/20 mt-2">
            Add something to get started 🚀
          </span>
        </div>
      )}

      {todos.map((item) => (
        <TodoItem key={item.id} item={item} dispatch={dispatch} />
      ))}
    </div>
  );
}
