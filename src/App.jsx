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
      default:
        return state;
    }
  }, initialTodo);

  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todoList.todos));
  }, [todoList]);

  return (
    // 'p-2' মোবাইলে গ্যাপ কমাবে, 'sm:p-4' বড় স্ক্রিনে গ্যাপ বাড়াবে
    <div className="h-screen w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden font-sans text-white">
      {/* মোবাইলে 'rounded-3xl' এবং প্যাডিং 'p-5' করেছি যাতে স্ক্রিন স্পেস বাঁচে */}
      <div className="flex flex-col bg-white/10 backdrop-blur-3xl border border-white/20 rounded-4xl sm:rounded-[2.5rem] p-5 sm:p-8 w-full max-w-md h-full max-h-[95vh] sm:max-h-[85vh] transition-all duration-300">
        <div className="shrink-0">
          {/* হেডিং সাইজ মোবাইলে ছোট করা হয়েছে (text-3xl) */}
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-md mb-4 sm:mb-6">
            Todo <span className="text-purple-400">List</span>
          </h1>
          <ProgressBar todoList={todoList.todos} />
          <TodoInput dispatch={dispatch} />
        </div>

        <div
          className={`flex-1 items-center overflow-y-auto  pr-1 custom-scrollbar scroll-smooth ${todoList.todos.length === 0 ? "content-center" : ""}`}
        >
          <TodoList todoList={todoList} dispatch={dispatch} />
        </div>

        <div className="shrink-0 pt-3 sm:pt-4 text-center border-t border-white/5 mt-2">
          <p className="text-white/20 text-[10px] sm:text-xs uppercase tracking-widest">
            Stay focused • Stay productive
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
