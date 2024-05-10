import { useState } from "react";
import CheckBox from "./Components/CheckBox";
import TaskInput from "./Components/TaskInput";

function App() {
  const[task,setTask] = useState("")

  const onAdd = (newTask) => {
    setTask(newTask)
  }
  
  return (
    <div className="">
        <CheckBox task={task} />
        <TaskInput onAdd={onAdd} />
    </div>
  );
}

export default App;
