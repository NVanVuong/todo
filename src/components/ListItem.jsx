import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const ListItem = ({
  todo,
  handleDelete,
  setShowModal,
  setTodoEdit,
  idsSlected,
  setIdsSelected,
}) => {
  const handleEditClick = (todo) => {
    setShowModal(true);
    setTodoEdit(todo);
  };

  const isPending = todo.status === "Pending";
  const isDone = todo.status === "Done";

  return (
    <li className="group flex items-center justify-between first:rounded-t tracking-wider text-sm font-medium text-[#484b6a] w-full border-b border-gray-300 p-4 bg-white">
      <>
        <div className="flex flex-1">
          <input
            type="checkbox"
            onChange={() => {
              setIdsSelected([...idsSlected, todo.id]);
            }}
            className="bg-gradient-checkbox w-3 mr-4 border border-black rounded-full"
          />
          <span className="pb-0.5">{todo.title}</span>
        </div>
        <div className="w-28 ml-4 text-left">
          <span
            className={` ${
              isDone
                ? "bg-green-200"
                : isPending
                ? "bg-yellow-100"
                : "bg-sky-200"
            } w-fit flex items-center gap-1 text-left py-0.5 pl-1 pr-2 rounded-2xl`}
          >
            <GoDotFill
              className={`${
                isDone
                  ? "text-green-600"
                  : isPending
                  ? "text-yellow-500"
                  : "text-sky-600"
              } text-sm font-extralight`}
            />{" "}
            {todo.status}
          </span>
        </div>
        <AiOutlineEdit
          onClick={() => handleEditClick(todo)}
          className="w-5 h-5 ml-4 invisible group-hover:visible cursor-pointer hover:text-yellow-500 hover:drop-shadow-md hover:scale-110 duration-200 transition"
        />
        <MdDeleteOutline
          onClick={() => handleDelete(todo.id)}
          className="w-5 h-5 ml-2 invisible group-hover:visible cursor-pointer hover:text-red-500 hover:drop-shadow-md hover:scale-110 duration-200 transition"
        />
      </>
    </li>
  );
};

export default ListItem;
