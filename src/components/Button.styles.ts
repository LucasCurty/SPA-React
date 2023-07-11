import styled, {css} from "styled-components";

type ButtonVariant =  'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps{
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: '#333a23',
    secondary: '#000000',
    danger: '#800000',
    success: '#007000'
}

export const ButtonContainer = styled.button<ButtonContainerProps> `
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};

    /* ${ props => {
        return css`
        background-color: ${buttonVariants[props.variant]};
        `
    }} */
`