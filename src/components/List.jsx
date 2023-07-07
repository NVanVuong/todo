import ListItem from "./ListItem";

const List = ({
  todosCurrent,
  handleUpdate,
  handleDelete,
  setShowModal,
  setTodoEdit,
  idsSlected,
  setIdsSelected,
}) => {
  return (
    <ul className="rounded-md">
      {todosCurrent.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          setShowModal={setShowModal}
          setTodoEdit={setTodoEdit}
          idsSlected={idsSlected}
          setIdsSelected={setIdsSelected}
        />
      ))}
    </ul>
  );
};

export default List;
