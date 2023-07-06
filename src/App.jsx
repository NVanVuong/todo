import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Layout from "./components/Layout";
import List from "./components/List";
import todoState from "./components/todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(todoState);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: title,
        completed: false,
      },
    ]);
  };

  const handleUpdate = (nextTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) return nextTodo;
        else return todo;
      })
    );
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <Layout>
        <div className="h-full flex justify-center items-center lg:w-2/3 xl:w-2/5 w-full px-7">
          <div className="w-full mt-16">
            <Header />
            <Input title={title} setTitle={setTitle} handleAdd={handleAdd} />
            <List
              todos={todos}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
            <Footer />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
