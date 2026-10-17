import { useState } from "react";
import Task from "../Components/Task";

function MyTasks({ tasks, check, deleteTask }) {
  const [activeTab, setActiveTab] = useState("all");

  const displayedTasks = tasks.filter((task) => {
    if (activeTab === "active") return task.completed === false;
    if (activeTab === "completed") return task.completed === true;

    return true;
  });

  return (
    <div className="min-w-0 flex-1 p-5 md:p-8">
      <h2 className="text-3xl font-bold">My Tasks</h2>
      <p className="mt-2 text-neutral-400">View and manage all your tasks.</p>

      <div className="mt-6 flex gap-3 border-b border-neutral-800 pb-4">
        <button
          onClick={() => setActiveTab("all")}
          className={`rounded-lg px-4 py-2 ${activeTab === "all" ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white"}`}
        >
          All Tasks
        </button>

        <button
          onClick={() => setActiveTab("active")}
          className={`rounded-lg px-4 py-2 ${activeTab === "active" ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white"}`}
        >
          Active
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`rounded-lg px-4 py-2 ${activeTab === "completed" ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white"}`}
        >
          Completed
        </button>
      </div>
      
      <div className="mt-6 space-y-4">
        {displayedTasks.length === 0 ? (
          <p className="text-neutral-500">No tasks found in this category.</p>
        ) : (
          displayedTasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
              onComplete={() => check(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyTasks;
