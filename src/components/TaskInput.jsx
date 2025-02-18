// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

function TaskInput({ addTask }) {
    // State for the input
    const [task, setTask] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        addTask(task);  // Pass task to parent
        setTask('');    // Clear input
      }
    };
  
    


    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What are you avoiding?"
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
  
  export default TaskInput;