import Task from "./Task";
import { useState } from "react";

function App() {
  const [completed, setCompleted] = useState([false, false, false]);

  function check(i) {
    setCompleted(
      completed.map((value, index) => {
        return index === i ? true : value;
      }),
    );
  }

  const tasks = [
    {
      id: 1,
      title: "Learn Node.js",
      description: "build the a backend server",
    },
    {
      id: 2,
      title: "Learn SQL",
      description: "study create,read,update,delete",
    },
    {
      id: 3,
      title: "Become God at chess",
      description: "practice and learn more",
    },
  ];

  function taskCounter() {
    const done = completed.filter((value) => value === true);
    return done.length;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white md:flex">
      <aside className="border-b border-neutral-800 p-5 md:min-h-screen md:w-56 md:border-b-0 md:border-r">
        <h1 className="text-2xl font-bold">
          Vega<span className="text-red-400">m</span>
        </h1>

        <nav className="mt-6 flex gap-4 text-sm text-neutral-300 md:flex-col">
          <a href="#" className="text-red-400">
            Dashboard
          </a>
          <a href="#">My Tasks</a>
          <a href="#">Focus Timer</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <h2 className="text-3xl font-bold">Focus. Let lock in</h2>
        <p className="mt-2 text-neutral-400">
          Track your work and build good habits :)
        </p>

    <div className="mt-8 max-w-3xl rounded-xl border border-neutral-800 bg-neutral-900 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Today's Tasks</h3>
        <p className="text-red-400">
          {taskCounter()} / {tasks.length}
        </p>
      </div>

        <div className="mt-4 space-y-3">
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              completed={completed[index]}
              onComplete={() => check(index)}
            />
          ))}
        </div>
      </div>
    </main>
    </div>
  );
}

export default App;
