import React from 'react'
import {Button} from 'react-native'
import {Container, Title} from './styles'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import Api from '../../resources/api/Api'
import { useNavigation } from '@react-navigation/native'

export default function Perfil(){
    const navigation = useNavigation()
    const sair = async() => {
        await Api.logout()
        navigation.navigate('Signin')
    }
    return (
        <>
        <Header headerTitle="DogWalker" />
        <Container>
            <Button
                onPress={sair}
                title="Logout"
                color={themes.padrao.colors.brand.amarelo}
                accessibilityLabel="Sair do sistema"
                />            
        </Container>
       </>
    )
}