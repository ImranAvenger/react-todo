export default function TodoInput({ task, setTask, addTask }) {
  return (
    <div className="mb-2 border-black border-2 py-2 px-2 rounded-lg">
      <input className="focus:outline-none" value={task} placeholder="add task" onChange={e => setTask(e.target.value)}/>
      <button className="cursor-pointer" onClick={addTask}>Add</button>
    </div>
  );
}
