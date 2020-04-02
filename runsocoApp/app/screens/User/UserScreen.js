import React, {useEffect, useState} from 'react'
import {View, Text, AsyncStorage } from 'react-native'

export default function User(){
    const [email, setEmail] = useState("")
    useEffect(() => {
        AsyncStorage.getItem('userEmail').then(
            value =>
              //AsyncStorage returns a promise so adding a callback to get the value
              setEmail(value)
            //Setting the value in Text
          );
      }, [])
      console.log(email)
    return(
        <View>
            <Text>Perfil de Usuario {email}</Text>
        </View>
    )
}