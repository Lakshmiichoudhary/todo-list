import React, { useState } from 'react'

const TaskInput = () => {
  const [taskName,setTaskName] = useState("")

  const onsubmit = () => {

  }

  return (
    <div>
      <form className='p-2 text-center'>
        <input className='p-3 outline-none rounded-md bg-slate-100' 
        type='text' 
        placeholder='Add task here..'
        value={taskName}
        onChange={event => setTaskName(event.target.value)}/>
        <button className='p-3 bg-emerald-500 rounded-md px-6 text-white'onClick={onsubmit}>Add</button>
      </form>
    </div>
  )
}

export default TaskInput
