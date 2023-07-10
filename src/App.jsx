import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Layout from "./components/Layout";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useGetTodosQuery } from "./service/api";
import {
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "./service/api";
import { Loading } from "./components/Loading";

function App() {
  const [todosCurrent, setTodosCurrent] = useState([]);
  const [todoEdit, setTodoEdit] = useState(null);
  const [viewCurrent, setViewCurrent] = useState("All");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idsSelected, setIdsSelected] = useState([]);
  const [addTodoMutation] = useAddTodoMutation();
  const [updateTodoMutation] = useUpdateTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  const { data: todos, isLoading, refetch } = useGetTodosQuery();
  useEffect(() => {
    if (todos) {
      setTodosCurrent(todos);
    }
  }, [todos]);

  const handleAdd = async () => {
    if (title.trim() !== "") {
      await addTodoMutation({
        id: uuidv4(),
        title: title,
        status: "Pending",
      });
    }
    setTitle("");
    refetch();
  };

  const handleUpdate = async (newTodo) => {
    await updateTodoMutation({
      id: newTodo.id,
      title: newTodo.title,
      status: newTodo.status,
    });
    refetch();
  };

  const handleDelete = async (todoId) => {
    await deleteTodoMutation(todoId);
    refetch();
  };

  const handleClearSelection = async (idsSelected) => {
    for (const id of idsSelected) {
      await deleteTodoMutation(id);
    }
    refetch();
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
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <List
                  todosCurrent={todosCurrent}
                  setTodosCurrent={setTodosCurrent}
                  handleDelete={handleDelete}
                  setShowModal={setShowModal}
                  setTodoEdit={setTodoEdit}
                  idsSelected={idsSelected}
                  setIdsSelected={setIdsSelected}
                />
                <Footer
                  viewCurrent={viewCurrent}
                  todosCurrent={todosCurrent}
                  setViewCurrent={setViewCurrent}
                  idsSelected={idsSelected}
                  handleClearSelection={handleClearSelection}
                />
              </>
            )}
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
