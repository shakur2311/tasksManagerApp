import { useState } from 'react';
import './App.css';
import CreateTask from './Components/CreateTask';
import ListTasks from './Components/ListTasks';

function App() {
  const [tasks,setTasks] = useState([]);
  const editTask = (i,newValue)=>{
    setTasks(tasks.map((value,index)=>{
      if(index===i){
        return newValue
      }else{
        return value;
      }
    }));
  }
  const deleteTask = (i)=>{
    setTasks(tasks.filter((element,index)=>{return index!==i}));
  }
  console.log(tasks);
  return (
    <div className="App">
      <div className='justify-content-center d-flex flex-column align-items-center pt-5'>
        <CreateTask tasks={tasks} setTasks={setTasks}/>
        <ListTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      </div>
    </div>
  );
}

export default App;
