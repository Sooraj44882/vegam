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
    <div className="min-h-screen bg-neutral-950 p-6 text-white">
      <h1 className="text-3xl font-bold">
        Vega<span className="text-red-400">m</span>
      </h1>

      <p className="mt-2 text-neutral-400">
        Track your work and build good habits :)
      </p>

      <div className="mt-8 rounded-xl bg-neutral-900 p-5">
        <h2 className="text-xl font-bold">Today's Tasks</h2>

        <p className="mt-2 text-red-400">
          Completed: {taskCounter()} / {tasks.length}
        </p>

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
    </div>
  );
}

export default App;
