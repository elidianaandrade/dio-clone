import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    &:-webkit-autofill, input:-internal-autofill-selected   {    
        -webkit-box-shadow: 0 0 0px 1000px #1E192C inset;
        -webkit-text-fill-color: #FFFFFF !important;
        border: none;
    }
`