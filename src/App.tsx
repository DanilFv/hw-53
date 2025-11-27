import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx";
import {useState} from "react";
import type {ITask} from "./types";

export const App = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {title:'Изучать React', id: 'task-1', isDone: false},
        {title:'Сделать домашку', id: 'task-2', isDone: false},
        {title:'Погладить кота', id: 'task-3', isDone: false},
    ]);

    const taskId: string = new Date().toISOString();


    const clickOnButton = (taskName: string) => {
        taskName = taskName.trim();
        if (!taskName) return alert("Вы ничего не ввели!");

        const copyTasks: ITask[] = [...tasks];
        copyTasks.push({title: taskName, id: taskId, isDone: false});
        setTasks(copyTasks);
    };

    const deleteTask = (id: string) => {
       const tasksCopyDeleted: ITask[] = tasks.filter((task) => task.id !== id);
       setTasks(tasksCopyDeleted);
    };

    const toggleTask = (id: string) => {
        const toggledTasks: ITask[] = tasks.map((task: ITask) => {
            if(id === task.id) {
               return {
                   ...task,
                   isDone: !task.isDone
               }
            }
            return task;
        });
        setTasks(toggledTasks);
    };


    return(
        <>
            <div className="todo-container">

               <AddTaskForm
                    clickOnFormSubmit={clickOnButton}
               />

                {tasks.map((task: ITask) => (
                    <Task
                        key={task.id}
                        className='task-text'
                        onDelete={() => deleteTask(task.id)}
                        isDone={task.isDone}
                        onToggle={() => toggleTask(task.id)}
                    >
                        {task.title}
                    </Task>
                ))}
            </div>
        </>
    )
}






