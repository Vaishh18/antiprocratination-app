// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function TaskInput({addTask}) {
   const [task,setTask] = useState('');

   //handle form submission
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(task.trim()){
        addTask(task);
        setTask('');
    }
   };

return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={task}
        onChange ={ (e)=> setTask(e.target.value)}
        placeholder="What are you avoiding?"
        />
    <button type='submit'>Add Task</button>
    </form>
    
  );
}

export default TaskInput