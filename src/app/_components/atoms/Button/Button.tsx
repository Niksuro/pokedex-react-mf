import { ButtonStyle } from "./Button.style";

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
}

const Button = ({text,variant, onClick}:ButtonProps) => {
    return ( 
        <ButtonStyle data-test="button" onClick={onClick} $variant={variant}>{text}</ButtonStyle>
    );
}
 
export default Button;