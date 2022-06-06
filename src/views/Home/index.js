import React from 'react'
import {Container, Title} from './styles'
import Smart from '../../components/svg/Smart'
import Header from '../../components/styled/Header'

export default function Home(){
    return (
        <>
        <Header headerTitle="Cadastro Prestadores de Serviço" />
        <Container>
            <Smart />
            <Title>Início</Title>
        </Container>
       </>
    )
}