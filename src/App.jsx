import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Layout from "./components/Layout";
import List from "./components/List";
import todoState from "./components/todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  todosAdd,
  todosAllDelete,
  todosDelete,
  todosUpdate,
} from "./todosSlice";

function App() {
  const todos = useSelector((state) => state.todo);
  const [todosCurrent, setTodosCurrent] = useState(todoState);
  const [todoEdit, setTodoEdit] = useState(null);
  const [viewCurrent, setViewCurrent] = useState("All");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idsSlected, setIdsSelected] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() !== "") {
      dispatch(
        todosAdd({
          id: uuidv4(),
          title: title,
          status: "Pending",
        })
      );
    }
    setTitle("");
  };

  const handleUpdate = (newTodo) => {
    dispatch(
      todosUpdate({
        id: newTodo.id,
        title: newTodo.title,
        status: newTodo.status,
      })
    );
  };

  const handleDelete = (todoId) => {
    dispatch(todosDelete(todoId));
  };

  const handleAllDelete = () => {
    dispatch(todosAllDelete(idsSlected));
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
              idsSlected={idsSlected}
              setIdsSelected={setIdsSelected}
            />
            <Footer
              viewCurrent={viewCurrent}
              todosCurrent={todosCurrent}
              setViewCurrent={setViewCurrent}
              handleAllDelete={handleAllDelete}
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
