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
    <div className="flex flex-col text-center gap-10 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-2xl w-96">
      <h1 className="text-3xl">Todo List</h1>
      <div className="">
        <TodoInput dispatch={dispatch} />
        <TodoList todoList={todoList} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
