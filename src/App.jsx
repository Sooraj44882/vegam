import Task from "./Task";
import { useState } from "react";
import Timer from "./Timer";

import {
  House,
  CheckSquare,
  Timer as TimerIcon,
  Settings,
} from "lucide-react";

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

    
<aside className="flex flex-col border-b border-neutral-800 bg-neutral-950 p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
  <h1 className="text-2xl font-bold tracking-tight">
    Vega<span className="text-red-400">m</span>
  </h1>

  <p className="mt-1 text-xs text-neutral-500">
    YOUR PRODUCTIVITY SPACE
  </p>

  <nav className="mt-10 space-y-2">
    <a
      href="#dashboard"
      className="flex items-center gap-3 rounded-xl bg-red-400 px-4 py-3 font-medium text-black"
    >
      <House size={19} />
      Dashboard
    </a>

    <a
      href="#tasks"
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
    >
      <CheckSquare size={19} />
      My Tasks
    </a>

    <a
      href="#focus-timer"
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
    >
      <TimerIcon size={19} />
      Focus Timer
    </a>

    <a
      href="#settings"
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
    >
      <Settings size={19} />
      Settings
    </a>
  </nav>

  <div className="mt-8 hidden rounded-xl border border-neutral-800 p-4 md:mt-auto md:block">
    <p className="text-sm font-medium">Stay focused 🎯</p>
    <p className="mt-1 text-xs leading-5 text-neutral-500">
      Small progress every day adds up.
    </p>
  </div>
</aside>

    <main id="dashboard" className="min-w-0 flex-1 p-5 md:p-8">
      <h2 className="text-3xl font-bold">Focus. Let’s lock in.</h2>
      <p className="mt-2 text-neutral-400">
        Track your work and build good habits :)
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">

        <section id="tasks" className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Today's Tasks</h3>
            <span className="text-red-400">
              {taskCounter()} / {tasks.length}
            </span>
          </div>

          <div className="mt-5 space-y-3">
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
        </section>

        <section id="focus-timer" className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h3 className="text-xl font-bold">Focus Timer</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Take it one session at a time.
          </p>
          <Timer />
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 xl:col-span-2">
          <h3 className="text-xl font-bold">Your progress</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Your weekly activity report will appear here.
          </p>
          <div className="mt-5 grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className={`h-8 rounded-md ${
                  i % 5 === 0
                    ? "bg-red-400"
                    : i % 3 === 0
                      ? "bg-red-400/40"
                      : "bg-neutral-800"
                }`}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  </div>
);

}

export default App;
