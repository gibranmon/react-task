import React, { useState, useEffect, createContext } from 'react'
import { tasks as TASKS } from '../assets/data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(task) {
        const newTask = {
            id: tasks.length + 1,
            title: task.title,
            description: task.description
        }
        setTasks([...tasks, newTask])
    }

    function deleteTask(taskID) {
        setTasks(tasks.filter(task => task.id !== taskID));
    }

    useEffect(() => {
        setTasks(TASKS)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}