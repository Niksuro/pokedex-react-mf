import { ButtonStyle } from "./Button.style";

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({text,variant, disabled, onClick}:ButtonProps) => {
    return ( 
        <ButtonStyle data-test="button" onClick={onClick} $variant={variant} disabled={disabled}>{text}</ButtonStyle>
    );
}
 
export default Button;