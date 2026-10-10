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

  return (
    <div>
      <h1>Vegam</h1>
      <p>A cool app to track the work and build habits</p>
      <p>Start Now</p>

      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => check(task.id - 1)}>
            {completed[0] ? "Completed " : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
