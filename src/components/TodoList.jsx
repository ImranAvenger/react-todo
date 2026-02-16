import TodoItem from "./TodoItem";

export default function TodoList({ todoList, dispatch }) {
  return (
    <div className="space-y-3">
      {todoList.todos.length === 0 && `No tasks are there!`}
      {todoList.todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
