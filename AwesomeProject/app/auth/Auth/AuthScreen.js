import React, {useRef, useEffect} from 'react';
import { View, ScrollView, Text, Image } from 'react-native';


import ModalRegister from './ModalRegister/ModalRegister';
import ModalTerms from './ModalTerms/ModalTerms';
import ModalLogin from './ModalLogin/ModalLogin'

import styles from './styles';







export default function AuthScreen(props) {
  let newContent = null;
  const { navigation, route } = props
  const { content, user } = route.params;
  const toastRef = useRef()
  switch(content) {
    case 'login':
      newContent = <ModalLogin navigation={navigation}/>
    break;
    case 'register':
      newContent = <ModalRegister navigation={navigation}/>
    break;
    case 'terms':
      newContent = <ModalTerms navigation={navigation} user= {user}  />
    break;
    default:
      newContent = <ModalLogin navigation={navigation}/>
    break;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.back1}></View>
        <View style={styles.back2}></View>
      </View>
      <View style={styles.header}>
          <Image style={styles.logo} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/runsoco.png?raw=true' }} />
          <Text style={styles.headerText}>
            unsoco
          </Text>
      </View>
      {
        newContent
      }
    </ScrollView>
  )
}

