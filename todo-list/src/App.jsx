import { useState, useRef } from "react";

import Trash from './assets/trash.png'

function App() {

  let [task, setTask] = useState([])

  let inputEl = useRef()

  const AddTask = () => {

    if(inputEl.current.value !== '') {

      let addNewTask = [...task, {
        id:Math.floor(Math.random() * 10000),
        note: inputEl.current.value
      }]
     setTask(addNewTask)
    }
  }

  const RemoveTask = (id) => {

    const taskList = task.filter((task) => task.id !== id)
    setTask(taskList)
  
  }

  return (
    <main className="bg-[url('./assets/background.jpg')] bg-bottom bg-cover w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-zinc-100 rounded-md shadow-sm w-[350px] md:w-[500px] h-[600px] p-6 overflow-auto text-zinc-800 flex flex-col gap-2">
        
        <h1 className="font-bold text-center text-2xl">To-do List</h1>

        <div className="self-center mt-4 flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="enter your task..."
            className="p-1 rounded-sm shadow-md px-2 max-w-[250px]"
            ref={inputEl}
          />
          <button className="text-center bg-zinc-800 text-zinc-50 rounded-md md:w-28 p-1 hover:opacity-85 w-full" onClick={AddTask}>New Task</button>
        </div>

        <ul className="flex flex-col gap-2 px-9 mt-5">
          {task.map((task) => (
            <li key={task.id} className="rounded-sm shadow-md p-3 flex justify-between">
              {task.note}
              <button onClick={() => RemoveTask(task.id)} className="w-6"><img src={Trash} className="hover:opacity-50" /></button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
