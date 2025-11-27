
interface Props {
    className: string;
    id: string;
    label: string;
    type: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Field: React.FC<Props> = ({className, id, label, type, onInputChange, value}) => {
    return (
         <input
             value={value}
             type={type}
             className={className}
             placeholder={label}
             id={id}
             onChange={onInputChange}
         />
    );
};

export default Field;