import React from "react";
import { useState } from "react";
function App() {
  const [task, setTask] = useState([]);
  const [tasks, setTasks] = useState("");

  const addTask = () => {
    if(task !== ""){
      setTasks([...tasks, task]);
    }
  };
  /*const removeTask = (index) => {
    const updatedList  = [...tasks]
    updatedList.splice(index , 1)
    setTasks(updatedList);
  }; */
  const removeTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  
  return (
    <div className=" flex flex-col items-center mb-16">
      <div>
        <h2 className="font-bold text-3xl m-12">Simple To-Do App</h2>
      </div>
      <div>
        <input
          className="border-2 px-2 py-1 rounded-xl w-8/12 "
          type="text"
          placeholder="Create a new To-Do"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          className="bg-green-400 text-base px-4 py-2 border-none rounded-xl text-slate-100 font-bold"
          onClick={addTask}
        >
          Add Task
        </button>
      
      </div>
      <div>
        {tasks?.length > 0 ? (
          <ul>
            {tasks.map((task, index) => {
              return (
                <div className="flex bg-slate-200 mt-4 mr-20 p-2 rounded-xl w-full">
                  <p className="grow">{task}</p>
                  <button
                    className="bg-red-500 text-base px-2 py-1 border-none rounded-xl text-slate-100 font-bold items-right flex items-right flex-none"
                    onClick={() => { 
                      removeTask(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
        ) : (
          <p>No Task found</p>
        )}
      </div>
    </div>
  );
}
export default App;
