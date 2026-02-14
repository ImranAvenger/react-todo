import { MdOutlineDelete } from "react-icons/md";


export default function TodoItem({ item, deleteSpecificTask }) {
  return (
    <div className="flex justify-center bg-white/40 p-3 rounded-lg text-white">
      <li className="list-none w-7/8">{item.text}</li>
      <button className="w-1/8 cursor-pointer flex items-center justify-center" onClick={() => deleteSpecificTask(item.id)}><MdOutlineDelete size={24} /></button>
    </div>
  );
}
