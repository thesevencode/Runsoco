import React, {useEffect, useState} from 'react'
import {View, Text, AsyncStorage, TouchableOpacity } from 'react-native'

export default function User(props){
    const { navigation } = props
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")



    useEffect(() => {
        AsyncStorage.getItem('email').then(
            value =>
              setEmail(value)
          );
        AsyncStorage.getItem('token').then(
            value =>
              setToken(value)
          );
      }, [])
      
      
      
      const logout = async() => {
      console.log("cerrando session")
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('token')
        console.log("session cerrada")
        navigation.navigate("Index")
      }
    return(
        <View>
            <Text>Perfil de Usuario {email}</Text>
            <Text>Perfil de Usuario {token}</Text>

            <TouchableOpacity 
                >
                <Text onPress={logout} >CERRAR SESIÓN</Text>
                </TouchableOpacity>
        </View>
    )
}