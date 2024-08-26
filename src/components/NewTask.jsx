import { useState } from "react";

export default function NewTask({ onAddTask, id }) {
  const [eneteredTask, setEnteredTask] = useState();
  function handleChange(value) {
    setEnteredTask(value);
    // alert(value);
    console.log(value);
  }

  function handleTask() {
    // alert(eneteredTask);
    if (eneteredTask.trim() === "") {
      return;
    }

    onAddTask(eneteredTask, id);
    console.warn(id);

    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none"
        onChange={(event) => handleChange(event.target.value)}
        value={eneteredTask}
      />
      <button
        className="text-stone-500 hover:text-green-500 font-bold"
        onClick={handleTask}
      >
        Add Task
      </button>
    </div>
  );
}
