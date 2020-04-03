import React from 'react'
import { 
    View, 
    ScrollView, 
    Text, 
    Image, 
    TouchableOpacity,
} from 'react-native'

import styles from './styles'



export default function IndexScreen(props) {
  const { navigation } = props 


  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.back1}></View>
        <View style={styles.back2}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image style={styles.logo} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/runsoco.png?raw=true' }} />
          <Text style={styles.headerText}>
            unsoco
          </Text>
        </View>
        <View style={styles.containerM}>
          <Image style={styles.logoM} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/entrega.png?raw=true' }} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text1}>Pide lo que quieras desde la comodidad de tu casa</Text>
          <Text style={styles.text2}>Una app sencilla, rápida, segura y funcional</Text>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate("Auth", { content: 'login' })}>
            <Text style={styles.btnText}
            >INICIA SESIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate("Auth", { content: 'register' })}>
            <Text 
              style={styles.btnText}
            >REGÍSTRATE</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}