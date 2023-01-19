import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext)

    function handleSubmit(e) {
        e.preventDefault();
        createTask({ title, description });
        setTitle('');
        setDescription('');
    }

    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-800 p-10 mb-4' action="" onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold mb-3 text-white'>Crea tu tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2
                placeholder-gray-900'
                autoFocus onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Escribe tu tarea' value={title} />
                <br />
                <textarea 
                    style={{resize:'none'}}
                    className='bg-slate-300 p-3 w-full mb-2 placeholder-gray-900'
                    placeholder='Escribe la descripción de la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    name="" id="" value={description}></textarea>
                <button className='bg-indigo-500 text-white px-2 py-1 rounded-md mt-4 hover:bg-indigo-300'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm