import { MdAdd } from "react-icons/md";

const Input = ({ title, setTitle, handleAdd }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="relative">
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="focus:outline-none w-full rounded-md p-4 bg-white"
        type="text"
        placeholder="Create a new todo..."
      />
      <MdAdd
        onClick={handleAdd}
        className="absolute right-4 top-5 text-xl cursor-pointer hover:text-indigo-500 hover:drop-shadow-md hover:scale-125 duration-200 transition"
      />
    </div>
  );
};

export default Input;
