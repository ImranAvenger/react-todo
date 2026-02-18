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
          todos: state.todos.filter((t) => t.id !== action.payload.id),
        };
      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((t) =>
            t.id === action.payload.id ? { ...t, completed: !t.completed } : t,
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
    <div className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 font-sans text-white overflow-hidden">
      {/* CARD CONTAINER: 
          - Mobile: Full width/height 
          - Landscape: Two columns, fixed height to force internal scrolling 
      */}
      <div
        className="
        flex flex-col 
        landscape:grid landscape:grid-cols-[1fr_1.2fr] 
        lg:grid lg:grid-cols-[1fr_1.2fr]
        bg-white/10 backdrop-blur-3xl border border-white/20 
        rounded-3xl sm:rounded-[2.5rem] 
        w-full max-w-5xl 
        h-[92vh] landscape:h-[85vh] lg:h-[80vh]
        shadow-2xl overflow-hidden
      "
      >
        {/* LEFT COLUMN: Input & Progress (Fixed) */}
        <div className="flex flex-col p-6 sm:p-8 border-b landscape:border-b-0 landscape:border-r border-white/10 bg-white/5">
          <Header />

          {/* Progress bar hidden on very short screens to save space */}
          <div className="hidden min-[380px]:block mt-4">
            <ProgressBar todoList={todoList.todos} />
          </div>

          <div className="mt-6">
            <TodoInput dispatch={dispatch} />
          </div>

          <div className="mt-auto pt-6 flex flex-wrap gap-3 items-center justify-around">
            <div
              role="tablist"
              className="flex p-1 bg-black/40 rounded-xl border border-white/10"
            >
              {["All", "Active", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-lg transition-all cursor-pointer 
                    ${filter === tab ? "bg-white text-black" : "text-white/40 hover:text-white"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {
              <button
                onClick={() =>
                  window.confirm("Clear all?") &&
                  dispatch({ type: "CLEAR_ALL" })
                }
                className={`px-3 py-2 rounded-xl bg-red-500/10 ${todoList.todos.length === 0 ? 'opacity-50' : 'hover:bg-red-500/20 cursor-pointer'} border border-red-500/20 text-[10px] font-black uppercase text-red-400`}
                disabled={todoList.todos.length === 0}
              >
                Clear
              </button>
            }
          </div>
        </div>

        {/* RIGHT COLUMN: The scrollable list area */}
        <div className="flex flex-col p-6 sm:p-8 h-full overflow-hidden bg-black/10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4 shrink-0">
            {filter} Tasks ({filteredTodos.todos.length})
          </h3>

          {/* THE SCROLL ZONE: 
              'flex-1' makes it take all remaining space.
              'overflow-y-auto' ensures the scrollbar appears only here.
          */}
          <div className={`flex-1 overflow-y-auto pr-2 custom-scrollbar ${filteredTodos.todos.length === 0 ? "content-center" : ""}`}>
            <TodoList todoList={filteredTodos} dispatch={dispatch} />
          </div>

          <div className="mt-4 shrink-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
