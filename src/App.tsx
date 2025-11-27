import './App.css'
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx";

export const App = () => {


    return(
        <>
            <div className="todo-container">

               <AddTaskForm />

                <Task
                    className='task-text'
                >
                    Buy milk
                </Task>

            </div>
        </>
    )
}






