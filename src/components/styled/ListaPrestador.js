import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../themes'

export default({ data }) => {
    const navigation = useNavigation()
    const navegaDetalhe = () => {
        navigation.navigate('Prestador',{prestador:data})
    }

    return (
        <Area onPress={navegaDetalhe}>
          <Avatar source={{uri: `https://ui-avatars.com/api?background=FFE5AA&color=3B5998&name=${data.razao_social}`}} />
          <InfoArea>
              <Empresa>{data.razao_social}</Empresa>
              <Porte>{data.porte}</Porte>
              <BotaoDetalhes>
                  <BotaoDetalhesText>Acesse os detalhes</BotaoDetalhesText>
              </BotaoDetalhes>
          </InfoArea>
        </Area>
    )
}

const Area = styled.TouchableOpacity`
background: ${themes.padrao.colors.brand.amarelo};
margin-bottom: 16px;
border-radius: 16px;
padding: 8px;
flex-direction: row
`
const Avatar = styled.Image`
width: 88px;
height: 88px;
border-radius: 24px;
`
const InfoArea = styled.View`
margin-left: 24px;
justify-content: space-between;
`
const Empresa = styled.Text`
font-size: 17px;
`
const Porte = styled.Text`
font-size: 14px;
margin-top: 4px;
`
const BotaoDetalhes = styled.View`
width: 140px;
height: 32px;
background: ${themes.padrao.colors.brand.azul};
border-radius: 8px;
justify-content: center;
align-items: center;
`
const BotaoDetalhesText = styled.Text`
font-size: 13px;
padding: 8px;
color: ${themes.padrao.colors.neutral.neutral_100}
`

