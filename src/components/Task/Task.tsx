import * as React from "react";
import Button from "../Button/Button.tsx";
import type {MouseEventHandler} from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
    onDelete: MouseEventHandler;
    isDone: boolean;
    onToggle: () => void;
}

const Task: React.FC<Props> = ({children, onDelete, isDone, onToggle}) => {
    return (
        <div className="task-list">
            <div className="task-item">

                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={onToggle}
                    className="task-checkbox"
                />

                <span
                    className={`task-text ${isDone ? "completed" : ""}`}
                >
                    {children}
                </span>

                <Button
                    className='delete-button material-icons'
                    type='button'
                    onClick={onDelete}
                >
                    delete_outline
                </Button>
            </div>
        </div>
    );
};
export default Task;