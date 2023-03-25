import React,{ useState } from 'react';

const CreateTask = ({tasks,setTasks}) => {
    const [taskInput,setTaskInput] = useState('');
    return (
        <div className='createTask d-flex'>
            <input type="text" className='form-control' value={taskInput}
            onChange={(e)=>{setTaskInput(e.target.value)}}/>
            <button className="btn btn-primary ms-3" onClick={()=>{
                setTasks(([...tasks,taskInput]));
                setTaskInput('');
            }}>Create</button>
        </div>
    );
}

export default CreateTask;
