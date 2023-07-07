import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Layout from "./components/Layout";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useGetTodosQuery } from "./api";
import {
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "./api";

function App() {
  const { data: todos } = useGetTodosQuery();
  const [todosCurrent, setTodosCurrent] = useState([]);
  const [todoEdit, setTodoEdit] = useState(null);
  const [viewCurrent, setViewCurrent] = useState("All");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idsSelected, setIdsSelected] = useState([]);

  useEffect(() => {
    if (todos) {
      setTodosCurrent(todos);
    }
  }, [todos]);

  // const handleAdd = () => {
  //   if (title.trim() !== "") {
  //     dispatch(
  //       todosAdd({
  //         id: uuidv4(),
  //         title: title,
  //         status: "Pending",
  //       })
  //     );
  //   }
  //   setTitle("");
  // };

  const addTodoMutation = useAddTodoMutation();
  const handleAdd = () => {
    if (title.trim() !== "") {
      addTodoMutation.mutate({
        id: uuidv4(),
        title: title,
        status: "Pending",
      });
    }
    setTitle("");
  };

  // const handleUpdate = (newTodo) => {
  //   dispatch(
  //     todosUpdate({
  //       id: newTodo.id,
  //       title: newTodo.title,
  //       status: newTodo.status,
  //     })
  //   );
  // };

  const updateTodoMutation = useUpdateTodoMutation();

  const handleUpdate = (newTodo) => {
    updateTodoMutation.mutate({
      id: newTodo.id,
      title: newTodo.title,
      status: newTodo.status,
    });
  };

  // const handleDelete = (todoId) => {
  //   dispatch(todosDelete(todoId));
  // };

  const deleteTodoMutation = useDeleteTodoMutation();
  const handleDelete = (todoId) => {
    deleteTodoMutation.mutate(todoId);
  };

  useEffect(() => {
    switch (viewCurrent) {
      case "Pending":
        setTodosCurrent(todos.filter((todo) => todo.status === "Pending"));
        break;
      case "In progress":
        setTodosCurrent(todos.filter((todo) => todo.status === "In progress"));
        break;
      case "Done":
        setTodosCurrent(todos.filter((todo) => todo.status === "Done"));
        break;
      default:
        setTodosCurrent(todos);
        break;
    }
  }, [viewCurrent, todos]);

  return (
    <>
      <Layout>
        <div className="h-full flex justify-center items-center lg:w-2/3 xl:w-2/5 w-full px-7">
          <div className="w-full mt-16">
            <Header />
            <Input title={title} setTitle={setTitle} handleAdd={handleAdd} />
            <List
              todosCurrent={todosCurrent}
              setTodosCurrent={setTodosCurrent}
              handleDelete={handleDelete}
              setShowModal={setShowModal}
              setTodoEdit={setTodoEdit}
              idsSlected={idsSelected}
              setIdsSelected={setIdsSelected}
            />
            <Footer
              viewCurrent={viewCurrent}
              todosCurrent={todosCurrent}
              setViewCurrent={setViewCurrent}
            />
            <Modal
              todo={todoEdit}
              handleUpdate={handleUpdate}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
