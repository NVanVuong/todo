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
import { inProgress, pending, done } from "./constants";

function App() {
  const [todosCurrent, setTodosCurrent] = useState([]);
  const [todoEdit, setTodoEdit] = useState(null);
  const [viewCurrent, setViewCurrent] = useState("All");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idsSelected, setIdsSelected] = useState([]);
  const [addTodoMutation, { isLoading: isAddTodoLoading }] =
    useAddTodoMutation();
  const [updateTodoMutation, { isLoading: isUpdateTodoLoading }] =
    useUpdateTodoMutation();
  const [deleteTodoMutation, { isLoading: isDeleteTodoLoading }] =
    useDeleteTodoMutation();

  const {
    data: todos,
    isLoading: isGetTodosLoading,
    refetch,
  } = useGetTodosQuery();

  const isLoading =
    isAddTodoLoading ||
    isUpdateTodoLoading ||
    isDeleteTodoLoading ||
    isGetTodosLoading;

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
        status: pending,
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
    setIdsSelected([]);
    refetch();
  };

  useEffect(() => {
    switch (viewCurrent) {
      case pending:
        setTodosCurrent(todos.filter((todo) => todo.status === pending));
        break;
      case inProgress:
        setTodosCurrent(todos.filter((todo) => todo.status === inProgress));
        break;
      case done:
        setTodosCurrent(todos.filter((todo) => todo.status === done));
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
            <div className="relative mt-8">
              <Loading isLoading={isLoading} />
              {!isGetTodosLoading ? (
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
              ) : null}
            </div>
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
