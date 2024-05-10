import React, { useState } from 'react'

const TaskInput = ({onAdd}) => {
  const [taskName,setTaskName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(taskName)
    setTaskName("")
  }

  return (
    <div>
      <form className='p-2 text-center' onSubmit={handleSubmit}>
        <input className='p-3 outline-none rounded-md bg-slate-100' 
        type='text' 
        placeholder='Add task here..'
        value={taskName}
        onChange={event => setTaskName(event.target.value)}/>
        <button className='p-3 bg-emerald-500 rounded-md px-6 text-white'>Add</button>
      </form>
    </div>
  )
}

export default TaskInput
