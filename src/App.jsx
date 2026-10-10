import Task from "./Task";
import { useState } from "react";

function App(){
    const [completed, setCompleted]=useState([false,false,false]);

  //completed={false,false,false};
  return (
    <div>
      <h1>Vegam</h1>
      <p>A cool app to track the work and build habits</p>
      <p>Start Now</p>
      
      <Task 
        title="Learn Node.js"
        description="build the a backend server"
      />
      <button onClick={()=>{setCompleted([true,completed[1],completed[2]])}}>complete</button>
      <Task 
        title="Learn SQL"
        description="study create,read,update,delete"
      />
      <button onClick={()=>{setCompleted([completed[0],true,completed[2]])}}>complete</button>
      <Task
        title="Become God at chess"
        description="practice and learn more"
      />
      <button onClick={()=>{setCompleted([completed[0],completed[1],true])}}>complete</button>
    </div>
  );
}

export default App;
