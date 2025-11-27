import {type FormEvent, useState} from "react";
import Field from "../Field/Field.tsx";
import Button from "../Button/Button.tsx";
import * as React from "react";

interface Props {
    clickOnFormSubmit: (taskName: string) => void;
}


const AddTaskForm: React.FC<Props> = ({clickOnFormSubmit}) => {
    const [taskName, setTaskName] = useState<string>('');


    const formSubmit = (event: FormEvent) => {
        event.preventDefault();
        clickOnFormSubmit(taskName);
        setTaskName('')
    }


    return (
        <form onSubmit={formSubmit}>
              <div className="input-section">
                    <Field
                        value={taskName}
                        type='text'
                        className='add-task-input'
                        label='Add new task'
                        id='title'
                        onInputChange={(event) => setTaskName(event.target.value)}
                    />

                    <Button
                        className='add-button'
                        type='submit'
                    >
                        Add
                    </Button>
                </div>
        </form>
    );
};

export default AddTaskForm;