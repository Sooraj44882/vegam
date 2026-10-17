import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn Node.js",
      description: "Build a backend server",
      completed: false,
    },
    {
      id: 2,
      title: "Learn SQL",
      description: "Study CRUD operations",
      completed: false,
    },
    {
      id: 3,
      title: "Practice chess",
      description: "Practice and learn more",
      completed: false,
    },
  ]);

  function check(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  }

  function taskCounter() {
    return tasks.filter((task) => task.completed).length;
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <BrowserRouter>
    <div className="min-h-screen bg-neutral-950 text-white md:flex">
      <Sidebar/>

    <Dashboard
      taskCounter={taskCounter}
      tasks={tasks}
      check={check}
      deleteTask={deleteTask}
      setTasks={setTasks}
    
    />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
