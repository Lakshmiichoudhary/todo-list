import { useEffect, useState } from "react";
import CheckBox from "./Components/CheckBox";
import TaskInput from "./Components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(tasks.length === 0) return;
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  useEffect(() =>{
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks)
  },[])

  const onAdd = (newTask) => {
    setTasks([...tasks, { id: Date.now(), name: newTask, done: false }]);
  };

  const handleTaskCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="p-4 lg:mx-[34%] mx-10 rounded-t-md shadow-lg from-black mt-7">
        <h1 className="text-2xl font-semibold">Todo</h1>
      {tasks.map((task) => (
        <CheckBox
          key={task.id}
          task={task}
          onCheckboxChange={handleTaskCheckboxChange}
          onDeleteTask={handleDeleteTask}
        />
      ))}
       </div>
      <TaskInput onAdd={onAdd} />
    </>
  );
}

export default App;
