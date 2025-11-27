import * as React from "react";
import Button from "../Button/Button.tsx";

interface Props {
    className: string;
    children: React.ReactNode;
}


const Task: React.FC<Props> = ({className, children}) => {
    return (
        <div className="task-list">
            <div className="task-item">
                <span
                    className={className}
                >
                    {children}
                </span>

                <Button
                    className='delete-button material-icons'
                    type='button'
                >
                    delete_outline
                </Button>
            </div>
        </div>
    );
};
export default Task;