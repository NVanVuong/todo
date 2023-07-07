import { v4 as uuidv4 } from "uuid";

const todoState = [
  { id: uuidv4(), title: "Jog around the park 3x", status: 'Pending' },
  { id: uuidv4(), title: "10 minutes meditation", status: 'In progress' },
  { id: uuidv4(), title: "Read for 1 hour", status: 'Pending' },
  { id: uuidv4(), title: "Pick up groceries", status: 'Done' },
  {
    id: uuidv4(),
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
    status: 'Done'
  },
];

export default todoState;
