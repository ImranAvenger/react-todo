import { useEffect, useReducer, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [filter, setFilter] = useState("All");

  const initialTodo = {
    todos: JSON.parse(localStorage.getItem("my_todos")) || [],
  };

  const [todoList, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: [action.payload, ...state.todos] };
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
      case "CLEAR_ALL":
        return { ...state, todos: [] };
      default:
        return state;
    }
  }, initialTodo);

  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todoList.todos));
  }, [todoList]);

  const filteredTodos = {
    todos: todoList.todos.filter((t) => {
      if (filter === "Active") return !t.completed;
      if (filter === "Completed") return t.completed;
      return true;
    }),
  };

  return (
    <div className="h-screen w-sm md:w-md lg:w-lg flex items-center justify-center p-2 sm:p-4 overflow-hidden font-sans text-white">
      <div className="flex flex-col bg-white/10 backdrop-blur-3xl border border-white/20 rounded-4xl sm:rounded-[2.5rem] p-5 sm:p-8 w-full max-w-md h-full max-h-[95vh] sm:max-h-[85vh] transition-all duration-300">
        <div className="shrink-0">
          <Header />
          <ProgressBar todoList={todoList.todos} />
          <TodoInput dispatch={dispatch} />

          <div className="flex items-center justify-between mt-6 px-1">
            <div className="flex gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
              {["All", "Active", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg transition-all ${
                    filter === tab
                      ? "bg-purple-500 text-white shadow-lg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {todoList.todos.length > 0 && (
              <button
                onClick={() =>
                  window.confirm("Clear All?") &&
                  dispatch({ type: "CLEAR_ALL" })
                }
                className="text-[10px] sm:text-xs font-bold text-red-400/50 hover:text-red-400"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <div
          className={`flex-1 items-center overflow-y-auto  pr-1 custom-scrollbar scroll-smooth ${filteredTodos.todos.length === 0 ? "content-center" : ""}`}
        >
          <TodoList todoList={filteredTodos} dispatch={dispatch} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
