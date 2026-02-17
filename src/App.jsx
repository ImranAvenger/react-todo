import { useEffect, useReducer } from "react";
import ProgressBar from "./components/ProgressBar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const initialTodo = {
    todos: JSON.parse(localStorage.getItem("my_todos")) || [],
  };

  const [todoList, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: [action.payload, ...state.todos] }; // নতুন টাস্ক উপরে আসবে
      case "REMOVE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, completed: !todo.completed }
              : todo,
          ),
        };
      default:
        return state;
    }
  }, initialTodo);

  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todoList.todos));
  }, [todoList]);

  return (
    <div className="h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans text-white">
      <div className="flex flex-col bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 w-full max-w-md max-h-[85vh]">
        <div className="shrink-0">
          <h1 className="text-center text-4xl font-extrabold tracking-tight drop-shadow-md mb-6">
            Todo <span className="text-purple-400">List</span>
          </h1>
          <ProgressBar todoList={todoList.todos} />
          <TodoInput dispatch={dispatch} />
        </div>

        <div className="flex-1 overflow-y-auto mt-6 pr-2 custom-scrollbar scroll-smooth">
          <TodoList todoList={todoList} dispatch={dispatch} />
        </div>

        <div className="shrink-0 pt-4 text-center">
          <p className="text-white/20 text-xs">Stay focused, stay productive</p>
        </div>
      </div>
    </div>
  );
}

export default App;
