import { v4 as uuidv4 } from "uuid";

const Data = [
  {
    id: uuidv4(),
    title: "To do",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn new technologies",
      },
      {
        id: uuidv4(),
        title: "Master Git",
      },
      {
        id: uuidv4(),
        title: "Learn Backend",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn React",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
      {
        id: uuidv4(),
        title: "Learn CSS",
      },
    ],
  },
];

export default Data;
