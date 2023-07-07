const Layout = ({ children }) => {
  return (
    <div
      className="
        transition-all
        ease-linear
        min-h-screen
        bg-todo-background
        bg-no-repeat
        bg-center-top
        bg-fixed
        bg-[length:100vw_40%]
        bg-gray-300 
        w-full"
    >
      <main className="flex flex-col items-center h-full">{children}</main>
    </div>
  );
};

export default Layout;
