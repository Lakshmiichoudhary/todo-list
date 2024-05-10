import React, { useState } from "react";
import Button from "./Button"

const TaskInput = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <div>
      <form
        className="p-4 shadow-lg from-black lg:mx-[34%] mx-10 rounded-b-md text-center"
        onSubmit={handleSubmit}
      >
        <input
          className="p-3 outline-none rounded-md bg-slate-100 lg:w-80"
          type="text"
          placeholder="Add task here.."
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <Button
          onClick={handleSubmit}
          text="Add"
          color="bg-emerald-500 text-white"
          padding="px-6 py-3"
        />
      </form>
    </div>
  );
};

export default TaskInput;
