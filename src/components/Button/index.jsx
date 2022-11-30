import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({title, buttonType="primary", onClick}) => {
    return (
        <ButtonContainer
            buttonType={buttonType}
            onClick={onClick}
        >
            {title}
        </ButtonContainer>
    )
}

export { Button }