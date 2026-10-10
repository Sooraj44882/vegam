import Task from "./Task";
import { useState } from "react";

function App(){
    const [completed, setCompleted]=useState([false,false,false]);

  function check(i){
      setCompleted(completed.map((value,index)=>{
      return index===i?true : value;
        })
      );
    }

  return (
    <div>
      <h1>Vegam</h1>
      <p>A cool app to track the work and build habits</p>
      <p>Start Now</p>
      
      <Task 
        title="Learn Node.js"
        description="build the a backend server"
      />
      <button onClick={()=>check(0) }>{completed[0] ? "Completed " : "Complete"}</button>
      <Task 
        title="Learn SQL"
        description="study create,read,update,delete"
      />
      <button onClick={()=>check(1)}>{completed[1] ? "Completed " : "Complete"}</button>
      <Task
        title="Become God at chess"
        description="practice and learn more"
      />
      <button onClick={()=>check(2)}>{completed[2] ? "Completed " : "Complete"}</button>
    </div>
  );
}

export default App;
