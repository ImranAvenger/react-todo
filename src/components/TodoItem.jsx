export default function TodoItem({ item, deleteSpecificTask }) {
  return (
    <div className="flex justify-center">
      <li className="list-none w-2/3">{item.text}</li>
      <button className="w-1/3 cursor-pointer" onClick={() => deleteSpecificTask(item.id)}>Delete</button>
    </div>
  );
}
