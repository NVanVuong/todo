import { v4 as uuidv4 } from "uuid";

const todoState = [
  { id: uuidv4(), title: "Jog around the park 3x", completed: true },
  { id: uuidv4(), title: "10 minutes meditation", completed: false },
  { id: uuidv4(), title: "Read for 1 hour", completed: false },
  { id: uuidv4(), title: "Pick up groceries", completed: false },
  {
    id: uuidv4(),
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

export default todoState;
