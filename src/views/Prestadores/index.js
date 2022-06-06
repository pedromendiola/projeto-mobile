import React, { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator, Text } from 'react-native'
import { Container, Title } from './styles'
import Header from '../../components/styled/Header'
import Api from '../../resources/api/Api'
import themes from '../../themes'
import ListaPrestador from '../../components/styled/ListaPrestador'
import Fab from '../../components/styled/Fab'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Prestadores() {
    const [loading, setLoading] = useState(false)
    const [listaPrestadores, setListaPrestadores] = useState([])
    const navigation = useNavigation()

    async function getPrestadores() {
        setLoading(true)
        
        let res = await Api.getPrestadores()

        res.ok === 0
            ? alert(`Não foi possível obter a lista de prestadores ${res.codeName}`)
            : setListaPrestadores(res)
        setLoading(false)
    }
    //Carregando os dados na primeira vez
    useEffect(() => {
        getPrestadores()
    }, [])

    return (
        <>
            <Header headerTitle="Prestadores" />
            <Container >
                <ScrollView>
                    {loading &&
                        <ActivityIndicator size="large"
                            color={themes.padrao.colors.brand.laranja} />
                    }
                    {listaPrestadores.length === 0 && !loading &&
                        <Text>Ops! Não existe nenhum prestador cadastrado.</Text>
                    }
                    <Text>Relação de Prestadores &nbsp;
                        <MaterialCommunityIcons name="cloud-refresh" size={20} color={themes.padrao.colors.brand.laranja} onPress={() => getPrestadores()} />
                    </Text>
                    {listaPrestadores.map((prestador, k) => (
                        <ListaPrestador key={k} data={prestador} />
                    ))}
                </ScrollView>
                <Fab title="Novo Prestador"
                    onPress={() => navigation.navigate('Prestador')}
                />
            </Container>
        </>
    )
}

