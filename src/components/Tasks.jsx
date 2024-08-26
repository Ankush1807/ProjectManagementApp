import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasksArray, id }) {
  const [taskClicked, setTaskClicked] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask onAddTask={onAdd} id={id} />
      {tasksArray == undefined || tasksArray != null ? (
        <p className="text-stone-800 my-4">
          This project does not have tasks yet
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasksArray.map((task, index) => {
            return (
              <li
                key={index}
                onClick={() => setTaskClicked(true)}
                className="my-4 cursor-pointer flex justify-between"
              >
                <span>{task}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(index)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
