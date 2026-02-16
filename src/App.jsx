import { useReducer } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const initialTodo = { todos: [] };

  const [todoList, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: [...state.todos, action.payload] };
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

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="flex flex-col gap-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-4xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-100">
        <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
          Todo <span className="text-purple-400">List</span>
        </h1>

        <div className="flex flex-col gap-2">
          <TodoInput dispatch={dispatch} />
          <div className="max-h-125 overflow-y-auto pr-1 custom-scrollbar">
            <TodoList todoList={todoList} dispatch={dispatch} />
          </div>
        </div>

        {todoList.todos.length > 0 && (
          <p className="text-white/40 text-sm italic text-center">
            Total tasks: {todoList.todos.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
