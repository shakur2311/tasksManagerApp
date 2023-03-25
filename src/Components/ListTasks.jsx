import React from 'react';
import Task from './Task';

const ListTasks = ({tasks,deleteTask,editTask}) => {
    return (
        <div className='listTasks mt-5'>
            {
                tasks.map((task,index)=>{
                    return <Task key={index} index={index} task={task} editTask={editTask} deleteTask={deleteTask}/>    
                })
            }
        </div>
    );
}

export default ListTasks;
