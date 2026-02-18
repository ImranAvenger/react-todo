import { useEffect, useReducer, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // 1. STATE: Track current filter view ('All', 'Active', 'Completed')
  const [filter, setFilter] = useState("All");

  // 2. STORAGE: Initialize state from LocalStorage or default to empty array
  const initialTodo = {
    todos: JSON.parse(localStorage.getItem("my_todos")) || [],
  };

  // 3. REDUCER: Centralized logic for modifying the Todo List
  const [todoList, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        // Add new item to the top of the list
        return { ...state, todos: [action.payload, ...state.todos] };
      case "REMOVE_TODO":
        // Filter out the item with the matching ID
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      case "TOGGLE_TODO":
        // Find the item and flip its 'completed' status
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, completed: !todo.completed }
              : todo,
          ),
        };
      case "CLEAR_ALL":
        // Reset list to empty
        return { ...state, todos: [] };
      default:
        return state;
    }
  }, initialTodo);

  // 4. PERSISTENCE: Save to LocalStorage whenever the todoList state changes
  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todoList.todos));
  }, [todoList]);

  // 5. DERIVED STATE: Filter the list based on the user's selected tab
  const filteredTodos = {
    todos: todoList.todos.filter((t) => {
      if (filter === "Active") return !t.completed;
      if (filter === "Completed") return t.completed;
      return true; // Returns all if filter is "All"
    }),
  };

  return (
    /* MAIN WRAPPER: Full screen centering with responsive widths */
    <div className="h-screen flex items-center justify-center p-2 sm:p-4 overflow-hidden font-sans text-white">
      {/* CARD CONTAINER: Glassmorphism effect (blur + transparency) */}
      <div className="flex flex-col bg-white/10 backdrop-blur-3xl border border-white/20 rounded-4xl sm:rounded-[2.5rem] p-5 sm:p-8 w-full max-w-md h-full max-h-[95vh] sm:max-h-[85vh] transition-all duration-300">
        {/* TOP SECTION: Header, Progress, and Input */}
        <div className="shrink-0">
          <Header />
          <ProgressBar todoList={todoList.todos} />
          <TodoInput dispatch={dispatch} />

          {/* TAB NAVIGATION & ACTION CONTAINER */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-8 px-1">
            {/* Filter Tabs - Responsive container */}
            <div
              role="tablist"
              className="flex p-1 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg w-fit mx-auto sm:mx-0"
            >
              {["All", "Active", "Completed"].map((tab) => {
                const isActive = filter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    role="tab"
                    aria-selected={isActive}
                    className={`
            whitespace-nowrap px-4 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-white text-black shadow-lg scale-95"
                : "text-white/50 hover:text-white"
            }
          `}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Clear All Button - Responsive width and better visibility */}
            {todoList.todos.length > 0 && (
              <button
                onClick={() =>
                  window.confirm("Delete all tasks permanently?") &&
                  dispatch({ type: "CLEAR_ALL" })
                }
                // sm:w-auto keeps the button compact on larger screens and full-width or centered on mobile.
                className="shrink-0 whitespace-nowrap flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 transition-all duration-200 w-fit mx-auto sm:mx-0 group"
              >
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter text-red-200">
                  Clear All
                </span>
              </button>
            )}
          </div>
        </div>

        {/* LIST SECTION: Scrollable area for the Todo items */}
        <div
          className={`flex-1 items-center overflow-y-auto custom-scrollbar scroll-smooth ${
            filteredTodos.todos.length === 0 ? "content-center" : ""
          }`}
        >
          <TodoList todoList={filteredTodos} dispatch={dispatch} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
