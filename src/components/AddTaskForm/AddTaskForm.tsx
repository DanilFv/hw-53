import Field from "../Field/Field.tsx";
import Button from "../Button/Button.tsx";

const AddTaskForm = () => {
    return (
        <form>
              <div className="input-section">
                    <Field
                        type='text'
                        className='add-task-input'
                        label='Add new task'
                        id='title'
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