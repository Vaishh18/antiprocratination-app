// TaskList.js
import React from 'react';

function TaskList({ tasks, completeTask }) {
    return (
        <ul className="mt-4">
        {tasks.map((task, index) => (
          <li 
            key={index}
            className="flex items-center justify-between bg-gray-50 p-3 mb-2 rounded"
          >
            <span>{task}</span>
            <button
              onClick={() => {
                console.log("CLICKED index:", index); // Add this
                completeTask(index);
              }}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;