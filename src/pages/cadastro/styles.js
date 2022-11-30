import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    margin-top: 100px;
    min-width: 400px;
`

export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: .5rem;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 35px;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 25px;
`

export const NoteText  = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: .775rem;
    margin: 2rem 0 1.5rem;
    color: #FFF;
` 

export const PText  = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: #FFF;
    margin: 0;
` 

export const LoginText =  styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: #23DD7A;
    margin: 0;
`