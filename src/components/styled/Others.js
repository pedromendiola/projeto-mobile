import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../../themes'

export const Container = styled.SafeAreaView`
background-color: ${props => props.theme.background};
flex: 1;
justify-content: center;
align-items: center;
`
export const ImagemSVG = styled.View`
transform: scale(${props => props.escala});
flex: 1;
`
export const InputArea = styled.View`
padding: 40px;
width: 100%;
background-color: ${themes.padrao.colors.brand.amarelo}
`