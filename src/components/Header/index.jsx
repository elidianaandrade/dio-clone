import React from 'react';
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={ logo } alt="Logo da DIO"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="/">Home</MenuRight>
                    <MenuRight href="/">Catálogo</MenuRight>
                    <MenuRight href="/">Planos</MenuRight>
                    <MenuRight href="/">Para Empresas</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>
            </Container>
        </Wrapper>  
    )
}

export { Header }