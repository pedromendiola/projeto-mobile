import React from 'react'
import {Container, Title} from './styles'
import Dog from '../../components/svg/Dog'

export default function Home(){
    return (
        <Container>
            <Dog />
            <Title>Início</Title>
        </Container>
    )
}