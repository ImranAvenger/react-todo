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
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4 lg:p-6 font-sans text-white overflow-x-hidden">
      {/* CARD CONTAINER:
          - Mobile: Single column
          - md+: Two columns
          - Landscape: Two columns, fixed height to force internal scrolling
      */}
      <div
        className="
        flex flex-col
        md:grid md:grid-cols-[1fr_1.2fr]
        landscape:grid landscape:grid-cols-[1fr_1.2fr]
        lg:grid lg:grid-cols-[1fr_1.2fr]
        bg-white/10 backdrop-blur-3xl border border-white/20
        rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
        w-full max-w-5xl
        h-[92vh] md:h-[85vh] landscape:h-[85vh] lg:h-[80vh] sl-card
        shadow-2xl overflow-hidden
      "
      >
        {/* LEFT COLUMN: Input & Progress (Fixed) */}
        <div className="sl-col flex flex-col p-4 sm:p-6 lg:p-8 border-b md:border-b-0 md:border-r landscape:border-b-0 landscape:border-r border-white/10 bg-white/5">
          <Header />

          {/* Progress bar */}
          <div className="mt-3 sm:mt-4">
            <ProgressBar todoList={todoList.todos} />
          </div>

          <div className="sl-input-wrap mt-4 sm:mt-6">
            <TodoInput dispatch={dispatch} />
          </div>

          <div className="sl-filter-wrap mt-4 sm:mt-auto sm:pt-6 landscape:mt-auto landscape:pt-6 md:mt-auto md:pt-6 flex flex-wrap gap-2 sm:gap-3 items-center justify-around">
            <div
              role="tablist"
              className="flex p-1 bg-black/40 rounded-xl border border-white/10"
            >
              {["All", "Active", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-2 sm:py-1.5 text-[11px] sm:text-[10px] font-bold uppercase rounded-lg transition-all cursor-pointer
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
                className={`px-3 py-2 rounded-xl bg-red-500/10 ${todoList.todos.length === 0 ? "opacity-50" : "hover:bg-red-500/20 cursor-pointer"} border border-red-500/20 text-[10px] font-black uppercase text-red-400`}
                disabled={todoList.todos.length === 0}
              >
                Clear
              </button>
            }
          </div>
        </div>

        {/* RIGHT COLUMN: The scrollable list area */}
        <div className="sl-col flex flex-col flex-1 min-h-0 p-4 sm:p-6 lg:p-8 overflow-hidden bg-black/10">
          <h3 className="sl-task-count text-xs font-bold uppercase tracking-widest text-white/30 mb-4 shrink-0">
            {filter} Tasks ({filteredTodos.todos.length})
          </h3>

          {/* THE SCROLL ZONE: 
              'flex-1' makes it take all remaining space.
              'overflow-y-auto' ensures the scrollbar appears only here.
          */}
          <div
            className={`flex-1 overflow-y-auto pr-2 custom-scrollbar ${filteredTodos.todos.length === 0 ? "content-center" : ""}`}
          >
            <TodoList todoList={filteredTodos} dispatch={dispatch} />
          </div>

          <div className="sl-footer-wrap mt-4 shrink-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
