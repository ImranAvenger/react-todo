import TodoItem from "./TodoItem";

export default function TodoList({ todoList, deleteSpecificTask }) {
  return (
    <div className="space-y-3">
      {todoList.length === 0 && `No tasks are there!`}
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteSpecificTask={deleteSpecificTask}
        />
      ))}
    </div>
  );
}
