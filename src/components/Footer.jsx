const Footer = ({
  viewCurrent,
  todosCurrent,
  setViewCurrent,
  idsSelected,
  handleClearSelection,
}) => {
  return (
    <div className="sm:flex sm:justify-between rounded-b mb-20 tracking-wider text-sm font-semibold text-[#484b6a] w-full border-b border-gray-200 p-4 bg-white">
      <span className="w-20 hidden sm:block">
        Total: {todosCurrent?.length}
      </span>
      <ul className="flex gap-4 justify-between mb-4 sm:mb-0">
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
      <div className="flex justify-between">
        <span className="w-20 block sm:hidden">
          Total: {todosCurrent?.length}
        </span>
        <span
          onClick={() => handleClearSelection(idsSelected)}
          className="cursor-pointer"
        >
          Clear selection
        </span>
      </div>
    </div>
  );
};
export default Footer;
