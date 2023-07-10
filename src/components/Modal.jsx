import { useEffect, useState } from "react";

const Modal = ({ todo, handleUpdate, showModal, setShowModal }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setTitle(todo?.title);
    setStatus(todo?.status);
  }, [todo]);

  const statusOptions = [
    { value: "Pending", label: "Pending" },
    { value: "In progress", label: "In Progress" },
    { value: "Done", label: "Done" },
  ];

  const handleClickOut = (event) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  const handleClickClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      ...todo,
      title: title,
      status: status,
    };
    handleUpdate(newTodo);
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={handleClickOut}
            className="fixed inset-0 z-[99999] flex items-center overflow-y-auto overflow-x-hidden bg-black/25 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto w-4/5 md:w-1/4">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-between rounded-t border-b border-solid border-slate-300 px-6 py-3">
                  <h4 className="text-lg font-semibold">Update</h4>
                  <button
                    className="float-right ml-auto border-0 bg-transparent text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={handleClickClose}
                  >
                    <span className="block text-3xl text-black opacity-100 outline-none transition duration-300 hover:text-red-500 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="relative w-auto p-6">
                  <label
                    htmlFor="title"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                    className={`mt-1 mb-4 block pl-2 h-10 w-full rounded-md border border-gray-300  shadow-sm focus:outline-none  focus:ring-4 focus:ring-blue-600 focus:ring-opacity-70 disabled:bg-gray-50`}
                    autoComplete="off"
                    placeholder="Enter your title..."
                    required
                  />
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`mt-1 block  pl-1 h-10 w-full rounded-md border  border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-70 disabled:bg-gray-50`}
                  >
                    {statusOptions.map((option) => (
                      <option
                        key={option.value}
                        name={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="mt-6 flex items-center justify-end rounded-b">
                    <button
                      className="background-transparent rounded-sm px-6 py-3 text-sm font-bold uppercase text-red-500 hover:ring-4 hover:ring-red-200 outline-none transition-all duration-200 ease-linear"
                      type="button"
                      onClick={handleClickClose}
                    >
                      Close
                    </button>
                    <button
                      className={`ml-2 rounded-sm bg-blue-main px-6 py-3 text-sm font-bold uppercase text-indigo-500 hover:ring-4 hover:ring-indigo-300 shadow outline-none transition-all duration-200 ease-linea`}
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
