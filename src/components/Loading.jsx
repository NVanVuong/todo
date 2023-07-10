export const Loading = ({ isLoading }) => {
  return (
    <div
      className={`${
        isLoading ? "block bg-gray-400 bg-opacity-40" : "hidden"
      } absolute inset-0 flex justify-center items-center`}
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent text-indigo-500 drop-shadow-md"></div>
    </div>
  );
};
