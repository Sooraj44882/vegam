import Task from "./Task";
import { useState } from "react";

function App(){
    const [count, setCount]=useState(0);

  return (
    <div>
      <h1>Vegam</h1>
      <p>A cool app to track the work and build habits</p>
      <p>Start Now</p>
      
      <Task 
        title="Learn Node.js"
        description="build the a backend server"
      />
      <button onClick={()=>{setCount(count+1)}}>[]</button>
      <Task 
        title="Learn SQL"
        description="study create,read,update,delete"
      />
      <button onClick={()=>{setCount(count+1)}}>[]</button>
      <Task
        title="Become God at chess"
        description="practice and learn more"
      />
      <button onClick={()=>{setCount(count+1)}}>[]</button>

    <p>Tasks complete:{count}</p>
    </div>
  );
}

export default App;
