import React, {ReactNode} from 'react';

interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return (
        <button onClick={onClick} style={{padding: '10px', fontSize: '16px'}}>
            {children}
        </button>
    );
};

export default Button;