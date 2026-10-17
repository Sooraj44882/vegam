import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";

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
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                taskCounter={taskCounter}
                tasks={tasks}
                check={check}
                deleteTask={deleteTask}
                setTasks={setTasks}
              />
            }
          />

          <Route
            path="/tasks"
            element={
              <MyTasks tasks={tasks} check={check} deleteTask={deleteTask} />
            }
          />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
