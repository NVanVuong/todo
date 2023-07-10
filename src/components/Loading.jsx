export const Loading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <span className="text-white font-semibold mb-3">Loading...</span>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent text-white mb-8"></div>
    </div>
  );
};
