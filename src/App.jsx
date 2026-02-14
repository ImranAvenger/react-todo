import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
    };

    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const deleteSpecificTask = (id) => {
    const updatedList = todoList.filter((list) => list.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div className="flex flex-col text-center gap-10">
      <h1 className="text-3xl">Todo List</h1>
      <div>
        <TodoInput task={task} setTask={setTask} addTask={addTask} />
        <TodoList todoList={todoList} deleteSpecificTask={deleteSpecificTask} />
      </div>
    </div>
  );
}

export default App;
