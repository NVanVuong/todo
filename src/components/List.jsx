import ListItem from "./ListItem";

const List = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <ul className="rounded-md">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default List;
