import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Home from '../views/Home'
import Preload from '../views/Preload'
import Signin from '../views/Signin'

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Preload"
                             screenOptions={{headerShown:false}}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home}/>                     
            <Stack.Screen name="Signin" component={Signin}/>  
            </Stack.Navigator>
        </NavigationContainer>
    )
}