import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDownloadDone, MdDeleteOutline } from "react-icons/md";

const ListItem = ({ todo, handleUpdate, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="group flex items-center justify-between first:rounded-t tracking-wider text-sm font-medium text-[#484b6a] w-full border-b border-gray-200 p-4 bg-white">
      <div className="flex flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) =>
            handleUpdate({
              ...todo,
              completed: e.target.checked,
            })
          }
          className="bg-gradient-checkbox w-3 mr-4 border border-black rounded-full"
        />
        {isEditing ? (
          <input
            className="focus:outline-none tracking-wider flex-1 text-sm border-b pb-0.5 border-blue-600"
            value={todo.title}
            onChange={(e) =>
              handleUpdate({
                ...todo,
                title: e.target.value,
              })
            }
          />
        ) : (
          <span className="pb-0.5">{todo.title}</span>
        )}
      </div>
      {!isEditing ? (
        <AiOutlineEdit
          onClick={() => setIsEditing(!isEditing)}
          className="w-5 h-5 ml-4 invisible group-hover:visible cursor-pointer hover:text-yellow-400 hover:drop-shadow-md hover:scale-110 duration-200 transition"
        />
      ) : (
        <MdOutlineDownloadDone
          onClick={() => setIsEditing(!isEditing)}
          className="w-5 h-5 ml-4 invisible group-hover:visible cursor-pointer hover:text-green-600 hover:drop-shadow-md hover:scale-110 duration-200 transition"
        />
      )}
      <MdDeleteOutline
        onClick={() => handleDelete(todo.id)}
        className="w-5 h-5 ml-2 invisible group-hover:visible cursor-pointer hover:text-red-500 hover:drop-shadow-md hover:scale-110 duration-200 transition"
      />
    </li>
  );
};

export default ListItem;
