import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './styles';

export default function Step1Screen(props) {
  const { navigation } = props
  const [email, setEmail] = useState("");


  useEffect(()=> {
    AsyncStorage.getItem('email').then(
      value =>
        setEmail(value)
    )
    console.log("¿existe email? ")
  },[])
  if(email) {
    console.log("si existe ", email)
    navigation.navigate("App")
  }
  console.log("no existe ", email)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.back1}></View>
        <View style={styles.back2}></View>
      </View>
      <View style={styles.content}>
      <View style={styles.superior}>
        <Text style={styles.superiorText}>RUNSOCO TUS SERVICIOS DE LARGA</Text>
      </View>
      <View style={styles.inferior}>
        <Image style={styles.image} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/email.png?raw=true' }} />
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => navigation.navigate("Step2")}
        >
          <Text style={styles.btnText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}
