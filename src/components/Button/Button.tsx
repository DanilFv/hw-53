interface Props {
    className: string;
    type:  "submit" | "reset" | "button" | undefined;
    children: React.ReactNode;
}


const Button: React.FC <Props> = ({className, type, children}) => {
    return (
        <button
            type={type}
            className={className}>
            {children}
        </button>
    );
};

export default Button;