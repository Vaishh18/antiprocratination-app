import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import StreakTracker from './components/StreakTracker';


function App() {
  const [tasks, setTasks] = useState([]);
  const [streak, setStreak] = useState(0);

  // Debugging effect
  useEffect(() => {
    console.log('Current tasks:', tasks);
    console.log('Current streak:', streak);
  }, [tasks, streak]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    setTasks([...tasks, taskText]);
  };

  const completeTask = (taskIndex) => {
    console.log("COMPLETING TASK AT INDEX:", taskIndex); // Add this
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
    setStreak(prev => {
      console.log("STREAK UPDATER RUNNING"); // Add this
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Procrastination Buster
        </h1>
        
        <TaskInput addTask={addTask} />
        
        <TaskList tasks={tasks} completeTask={completeTask} />
        
        <div className="mt-6">
          <StreakTracker streak={streak} />
         
        </div>

        
      </div>
    </div>
  );
}

export default App;