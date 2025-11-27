
interface Props {
    className: string;
    id: string;
    label: string;
    type: string;
}

const Field: React.FC<Props> = ({className, id, label, type}) => {
    return (
         <input
             type={type}
             className={className}
             placeholder={label}
             id={id}
         />
    );
};

export default Field;