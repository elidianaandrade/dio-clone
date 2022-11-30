import styled, {css}  from 'styled-components'

export const ButtonContainer = styled.button`
    position: relative;
    color: #FFFFFF;
    font-size: 1.15rem;
    font-weight: 400;
    background: #565656;
    border-radius: 2rem;
    padding: 0.25rem 1.5rem;
    margin: 0 0.5rem;
    min-width: 130px;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s ease-out 0s;
    &:hover {
        background: #E4105D;
    }

    ${({buttonType}) => buttonType !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`