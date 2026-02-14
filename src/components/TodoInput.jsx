import { IoMdAdd } from "react-icons/io";

export default function TodoInput({ task, setTask, addTask }) {
  return (
    <div className="mb-2 border-black border-2 py-2 px-2 rounded-lg flex items-center">
      <input
        className="focus:outline-none flex-1"
        value={task}
        placeholder="add task"
        onChange={e => setTask(e.target.value)}
      />
      <button
        className="cursor-pointer flex items-center justify-center"
        onClick={addTask}
      >
        <IoMdAdd size={24} />
      </button>
    </div>
  );
}
