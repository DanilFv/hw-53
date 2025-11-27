import type {MouseEventHandler} from "react";

interface Props {
    className: string;
    type:  "submit" | "reset" | "button" | undefined;
    children: React.ReactNode;
    onClick?: MouseEventHandler;
}


const Button: React.FC <Props> = ({className, type, children, onClick}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={className}>
            {children}
        </button>
    );
};

export default Button;