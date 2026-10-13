import Task from "./Components/Task";
import { useState } from "react";
import Timer from "./Components/Timer";

import { House, CheckSquare, Timer as TimerIcon, Settings } from "lucide-react";

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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask() {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  }

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
    <div className="min-h-screen bg-neutral-950 text-white md:flex">
      <aside className="flex flex-col border-b border-neutral-800 bg-neutral-950 p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <h1 className="text-2xl font-bold tracking-tight">
          Vega<span className="text-red-400">m</span>
        </h1>

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
      </aside>

      <main id="dashboard" className="min-w-0 flex-1 p-5 md:p-8">
        <h2 className="text-3xl font-bold">Focus. Let’s lock in.</h2>

        <p className="mt-2 text-neutral-400">
          Track your work and build good habits.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
          <section
            id="tasks"
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Today's Tasks</h3>

              <span className="text-red-400">
                {taskCounter()} / {tasks.length}
              </span>
            </div>

            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                addTask();
              }}
            >
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 p-3 outline-none focus:border-red-400"
              />

              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description (optional)"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 p-3 outline-none focus:border-red-400"
              />

              <button
                type="submit"
                className="rounded-lg bg-red-400 px-4 py-2 font-medium text-black transition hover:bg-red-300"
              >
                + Add Task
              </button>
            </form>

            <div className="mt-5 max-h-105 space-y-3 overflow-y-auto pr-2">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  completed={task.completed}
                  onComplete={() => check(task.id)}
                  onDelete={()=>{deleteTask(task.id)}}
                />
              ))}
            </div>
          </section>

          <section
            id="focus-timer"
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
          >
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
