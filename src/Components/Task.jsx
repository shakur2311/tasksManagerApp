import React,{useState} from 'react';

const Task = ({task,index,editTask,deleteTask}) => {
    const [editInput, setEditInput] = useState('');
    const [isEditing,setIsEditing] = useState(false);
    return (
        <div>
            {
            isEditing ? 
                <div className='border rounded d-flex justify-content-between p-3'>
                    <input className='form-control w-50' 
                    type="text" value={editInput} onChange={(e)=>{setEditInput(e.target.value)}}/>
                    <div>
                        <button className='btn btn-primary' onClick={()=>{editTask(index,editInput); setIsEditing(false);}}>Actualizar</button>
                        <button className='btn btn-danger' onClick={()=>setIsEditing(false)}>Cancelar</button>
                    </div>
                </div>
                
                : 
                <div className='border rounded d-flex justify-content-between p-3'>
                    <div>{task} {index}</div>
                    <div>
                        <button className='btn btn-success' onClick={()=>{setIsEditing(true)}}>Editar</button>
                        <button className='btn btn-danger' onClick={()=>{deleteTask(index)}}>Eliminar</button>
                    </div>
                </div>
            }
        </div>  
            
    );
}

export default Task;
