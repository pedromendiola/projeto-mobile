import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import themes from '../../themes'
const Fab = (props) => {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    )
}
export default Fab;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        position: 'absolute',
        bottom: 80,
        right: 16,
        backgroundColor: themes.padrao.colors.brand.amarelo,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themes.padrao.colors.brand.azul
    }
})
