import ListItem from "./ListItem";

const List = ({
  todosCurrent,
  handleUpdate,
  handleDelete,
  setShowModal,
  setTodoEdit,
  idsSelected,
  setIdsSelected,
}) => {
  return (
    <ul className="rounded-md">
      {todosCurrent?.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          setShowModal={setShowModal}
          setTodoEdit={setTodoEdit}
          idsSelected={idsSelected}
          setIdsSelected={setIdsSelected}
        />
      ))}
    </ul>
  );
};

export default List;
