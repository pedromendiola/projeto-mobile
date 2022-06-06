import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Platform, ActivityIndicator, Button, View }
    from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import Api from '../../resources/api/Api'
import { Alert } from 'react-native-web'


export default ({ route }) => {
    const navigation = useNavigation()
    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.prestador :
        {
            nome: '', email: '', servico: '', celular: '', obs: ''
        }

    const [prestador, setPrestador] = useState(registroInicial)

    const salvarPrestador = async (dadosPrestador) => {
        let salvar = dadosPrestador.hasOwnProperty('_id') ? await Api.alteraPrestador(dadosPrestador) : await Api.incluiPrestador(dadosPrestador)
        if (salvar.hasOwnProperty('errors')) {
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if (salvar.hasOwnProperty('acknowledged')) {
            Platform.OS === 'web' ? alert(`✅Tudo OK: Registro salvo com sucesso `) : Alert.alert("✅Tudo OK", 'Registro salvo com sucesso')
            navigation.navigate('Prestadores')

        }
    }

    const apagaPrestador = async (idPrestador) => {
        //let apagar = idPrestador.hasOwnProperty('_id') ? await Api.removePrestador(idPrestador) : await Api.removePrestador(idPrestador)
        let apagar = await Api.removePrestador(idPrestador)
        if (apagar.hasOwnProperty('erros')) {
            Platform.OS === 'web' ? alert(`‼️Erro: ${apagar.errors[0].msg}`) : Alert.alert("‼️Erro", apagar.errors[0].msg)
        } else if (apagar.hasOwnProperty('acknowledged')) {
            Platform.OS === 'web' ? ('Registro removido!') : Alert.alert('ok', 'Registro removido')
            navigation.navigate('Prestadores')
        }
    }

    async function confirmaExclusaoRegistro(idPrestador) {
        if (Platform.OS !== 'web') {
            try {
                Alert.alert('Atenção', 'Deseja mesmo excluir?', [
                    { text: 'Não', style: 'cancel' },
                    {
                        text: 'Sim', onPress: async () => {
                            apagaPrestador(idPrestador)
                        }
                    }
                ])
            } catch (response) {
                Alert.alert(response.data.error)
            }
        } else {
            if (confirm('Atenção!\n Deseja mesmo excluir?')) {
                apagaPrestador(idPrestador)
            }
        }
    }
    


    return (
        <>
            <Header headerTitle="Cadastro de Prestador" />
            <View>
                
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    name='nome'
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, nome: text })}
                    value={prestador.nome}
                    keyboardType='default'
                    placeholder='nome'
                    maxLength={100}
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    name='email'
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, email: text })}
                    value={prestador.email}
                    keyboardType='default'
                    placeholder='email@gmail.com'
                    maxLength={50}
                />

                <Text style={styles.label}>Serviço:</Text>
                <TextInput
                    name="Serviço prestado"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, servico: text })}
                    value={prestador.servico}
                    keyboardType="default"
                    placeholder='Ex: Pintor'
                    maxLength={30}
                />

                <Text style={styles.label}>Celular:</Text>
                <TextInput
                    name="celular"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, celular: text })}
                    value={prestador.celular}
                    keyboardType="default"
                    placeholder='Celular'
                    autoComplete='tel'
                    maxLength={20}
                />

                <Text style={styles.label}>Obs.:</Text>
                <TextInput
                    name="obs"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, obs: text })}
                    value={prestador.obs}
                    keyboardType="default"
                    placeholder='Descrição do serviço'
                    autoComplete='obs'
                    maxLength={50}
                />

                <Button
                    onPress={() => salvarPrestador(prestador)}
                    title='Salvar o Registro'
                    color={themes.padrao.colors.brand.azul}
                    accessibilityLabel='Salvar os dados'
                />
                <Button
                    onPress={() => navigation.navigate('Prestadores')}
                    title='Cancelar'
                    color={themes.padrao.colors.brand.neutra}
                    accessibilityLabel='Cancelar'
                />
                <Button
                    onPress={() => confirmaExclusaoRegistro(prestador)}
                    title='Apagar'
                    color={themes.padrao.colors.brand.red}
                    accessibilityLabel='Apagar'
                />

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40, margin: 8, borderWidth: 1,
        borderColor: themes.padrao.colors.brand.laranja, padding: 8
    },
    label: { marginLeft: 8, marginTop: 8, marginBottom: 4, fontSize: 14 }
})