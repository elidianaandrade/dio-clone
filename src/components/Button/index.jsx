import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({title, type="primary", onClick}) => {
    return (
        <ButtonContainer
            type={type}
            onClick={onClick}
        >
            {title}
        </ButtonContainer>
    )
}

export { Button }