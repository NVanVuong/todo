const Footer = ({
  viewCurrent,
  todosCurrent,
  setViewCurrent,
  handleAllDelete,
}) => {
  return (
    <div className="flex justify-between rounded-b mb-20 tracking-wider text-sm font-semibold text-[#484b6a] w-full border-b border-gray-200 p-4 bg-white">
      <span className="w-20">Total: {todosCurrent.length}</span>
      <ul className="flex gap-4 ">
        <li
          onClick={() => setViewCurrent("All")}
          className={`${
            viewCurrent !== "All" && "text-gray-400"
          } cursor-pointer `}
        >
          All
        </li>
        <li
          onClick={() => setViewCurrent("Pending")}
          className={`${
            viewCurrent !== "Pending" && "text-gray-400"
          }  cursor-pointer`}
        >
          Pending
        </li>
        <li
          onClick={() => setViewCurrent("In progress")}
          className={`${
            viewCurrent !== "In progress" && "text-gray-400"
          } cursor-pointer`}
        >
          In progress
        </li>
        <li
          onClick={() => setViewCurrent("Done")}
          className={`${
            viewCurrent !== "Done" && "text-gray-400"
          } cursor-pointer`}
        >
          Done
        </li>
      </ul>
      <span onClick={handleAllDelete} className="cursor-pointer">
        Clear selection
      </span>
    </div>
  );
};
export default Footer;
