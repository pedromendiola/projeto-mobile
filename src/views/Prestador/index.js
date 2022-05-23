import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Platform, ActivityIndicator, Button, View }
    from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import Api from '../../resources/api/Api'

export default ({ route }) => {
    const navigation = useNavigation()
    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.prestador :
        {
            cnpj: '', razao_social: '', descricao_tipo_de_logradouro: '', logradouro: '',
            nome_fantasia: '', cep: '', numero: '', municipio: '', uf: '', bairro: '',
            ddd_telefone_1: '', ddd_telefone_2: '', porte: '', natureza_juridica: '',
            cnae_fiscal: '', cnae_fiscal_descricao: '', descricao_situacao_cadastral: '',
            data_inicio_atividade: '', localizacao: { type: 'Point', coordinates: [0, 0] }
        }

    const [prestador, setPrestador] = useState(registroInicial)

    const salvarPrestador = async (dadosPrestador) => {
        let salvar = dadosPrestador.hasOwnProperty('_id') ? await Api.alteraPrestador(dadosPrestador) : await Api.incluiPrestador(dadosPrestador)
        if(salvar.hasOwnProperty('errors')){
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if(salvar.hasOwnProperty('acknowledged')){
            Platform.OS === 'web' ? alert(`✅Tudo OK: Registro salvo com sucesso `) : Alert.alert("✅Tudo OK", 'Registro salvo com sucesso')
            navigation.navigate('Prestadores')
        }
    }

    return (
        <>
            <Header headerTitle="Prestador" />
            <View>
                <Text>Cadastro de Prestadores</Text>
                <Text style={styles.label}>CNPJ</Text>
                <TextInput
                    name='cnpj'
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, cnpj: text })}
                    value={prestador.cnpj}
                    keyboardType='default'
                    placeholder='CNPJ'
                    maxLength={14}
                />
                <Text style={styles.label}>Razão Social</Text>
                <TextInput
                    name='cnpj'
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, razao_social: text })}
                    value={prestador.razao_social}
                    keyboardType='default'
                    placeholder='Razão Social'
                    maxLength={100}
                />
                <Text style={styles.label}>Nome Fantasia</Text>
                <TextInput
                    name='cnpj'
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, nome_fantasia: text })}
                    value={prestador.nome_fantasia}
                    keyboardType='default'
                    placeholder='Nome Fantasia'
                    maxLength={100}
                />
                <Text style={styles.label}>CEP</Text>
                <TextInput
                    name='cep'
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, cep: text })}
                    value={prestador.cep}
                    keyboardType='default'
                    placeholder='99999999'
                    maxLength={8}
                    autoComplete='postal-code'
                />
                <Text style={styles.label}>Tipo de Logradouro</Text>
                <TextInput
                    name="descricao_tipo_de_logradouro"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, descricao_tipo_de_logradouro: text })}
                    value={prestador.descricao_tipo_de_logradouro}
                    keyboardType="default"
                    placeholder='Ex: Rua'
                    maxLength={100}
                />
                <Text style={styles.label}>Logradouro</Text>
                <TextInput
                    name="logradouro"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, logradouro: text })}
                    value={prestador.logradouro}
                    keyboardType="default"
                    placeholder='Logradouro'
                    maxLength={100}
                />
                <Text style={styles.label}>Número do Logradouro</Text>
                <TextInput
                    name="numero"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, numero: text })}
                    value={prestador.numero}
                    keyboardType="default"
                    placeholder='Número'
                    maxLength={20}
                />
                <Text style={styles.label}>Munícipio</Text>
                <TextInput
                    name="municipio"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, municipio: text })}
                    value={prestador.municipio}
                    keyboardType="default"
                    placeholder='Munícipio'
                    maxLength={100}
                />
                <Text style={styles.label}>Bairro</Text>
                <TextInput
                    name="bairro"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, bairro: text })}
                    value={prestador.bairro}
                    keyboardType="default"
                    placeholder='Bairro'
                    maxLength={20}
                />
                <Text style={styles.label}>UF</Text>
                <TextInput
                    name="uf"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, uf: text })}
                    value={prestador.uf}
                    keyboardType="default"
                    placeholder='UF'
                    maxLength={2}
                />
                <Text style={styles.label}>Telefone 1</Text>
                <TextInput
                    name="ddd_telefone_1"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, ddd_telefone_1: text })}
                    value={prestador.ddd_telefone_1}
                    keyboardType="default"
                    placeholder='Telefone 1'
                    autoComplete='tel'
                    maxLength={20}
                />
                <Text style={styles.label}>Telefone 2</Text>
                <TextInput
                    name="ddd_telefone_2"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, ddd_telefone_2: text })}
                    value={prestador.ddd_telefone_2}
                    keyboardType="default"
                    placeholder='Telefone 2'
                    maxLength={20}
                />
                <Text style={styles.label}>Porte</Text>
                <TextInput
                    name="porte"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, porte: text })}
                    value={prestador.porte}
                    keyboardType="default"
                    placeholder='Porte da Empresa'
                    maxLength={100}
                />
                <Text style={styles.label}>Natureza Jurídica</Text>
                <TextInput
                    name="natureza_juridica"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, natureza_juridica: text })}
                    value={prestador.natureza_juridica}
                    keyboardType="default"
                    placeholder='Natureza Jurídica da Empresa'
                    maxLength={100}
                />
                <Text style={styles.label}>Código CNAE</Text>
                <TextInput
                    name="cnae_fiscal"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, cnae_fiscal: text })}
                    value={prestador.cnae_fiscal}
                    keyboardType="number-pad"
                    placeholder='Código do CNAE'
                    maxLength={7}
                />
                <Text style={styles.label}>Descrição CNAE</Text>
                <TextInput
                    name="cnae_fiscal_descricao"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, cnae_fiscal_descricao: text })}
                    value={prestador.cnae_fiscal_descricao}
                    keyboardType="default"
                    placeholder='Descrição do CNAE'
                    maxLength={100}
                />
                <Text style={styles.label}>Data Início da Atividade</Text>
                <TextInput
                    name="data_inicio_atividade"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, data_inicio_atividade: text })}
                    value={prestador.data_inicio_atividade}
                    keyboardType="numbers-and-punctuation"
                    placeholder='YYYY-MM-DD'
                    maxLength={10}
                />
                <Text style={styles.label}>Situação Cadastral</Text>
                <TextInput
                    name="descricao_situacao_cadastral"
                    style={styles.input}
                    onChangeText={(text) => setPrestador({ ...prestador, descricao_situacao_cadastral: text })}
                    value={prestador.descricao_situacao_cadastral}
                    keyboardType="default"
                    placeholder='Descrição da Situação Cadastral'
                    maxLength={100}
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
                    color={themes.padrao.colors.brand.laranja}
                    accessibilityLabel='Cancelar'
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