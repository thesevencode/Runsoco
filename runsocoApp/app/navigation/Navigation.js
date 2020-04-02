import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//auth
import AuthIndexScreen from '../auth/Index/IndexScreen'
import AuthAuthScreen from '../auth/Auth/AuthScreen'

//tutorial
import AuthTutorialStep1Screen from '../auth/Tutorial/Step1/Step1Screen'
import AuthTutorialStep2Screen from '../auth/Tutorial/Step2/Step2Screen'



//screens
import UserScreen from '../screens/User/UserScreen'


const Stack = createStackNavigator()


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Step1"
                screenOptions={{
                headerShown: false
                }}>
                <Stack.Screen name="Step1" component={AuthTutorialStep1Screen}/>
                <Stack.Screen name="Step2" component={AuthTutorialStep2Screen}/>
                
                <Stack.Screen name="Index" component={AuthIndexScreen}/>
                <Stack.Screen name="Auth" component={AuthAuthScreen} />
                <Stack.Screen name="App" component={UserScreen} />

            
            </Stack.Navigator>
        </NavigationContainer>
    )
}