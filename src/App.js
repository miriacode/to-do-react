import './App.css';
import { useState } from "react";

import TaskForm from './components/TaskForm/TaskForm'
import TaskDisplay from './components/TaskDisplay/TaskDisplay';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks,newTask]);
  }

  return (
    <div className="App">
      <TaskForm onNewTask={addTask}></TaskForm>
      <TaskDisplay tasks={tasks}></TaskDisplay>
    </div>
  );
}

export default App;
