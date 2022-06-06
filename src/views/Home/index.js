import React from 'react'
import {Container, Title} from './styles'
import Dog from '../../components/svg/Dog'
import Header from '../../components/styled/Header'

export default function Home(){
    return (
        <>
        <Header headerTitle="Cadastro Prestadores" />
        <Container>
            <Dog />
            <Title>Início</Title>
        </Container>
       </>
    )
}