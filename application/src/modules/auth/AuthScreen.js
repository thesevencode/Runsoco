import React from 'react';
import { View, ScrollView, Text, Modal } from 'react-native';

import ModalRegister from './components/ModalRegister/ModalRegister';
import ModalLegal from './components/ModalLegal/ModalLegal';
import ModalConfirmation from './components/ModalConfirmation/ModalConfirmation';
import ModalLogin from './components/ModalLogin/ModalLogin'

import styles from './styles';

function AuthScreen({ navigation, route }) {
  let newContent = null;
  const { content } = route.params;

  switch(content) {
    case 'login':
      newContent = <ModalLogin navigation={navigation}/>
    break;
    case 'registry':
      newContent = <ModalRegister navigation={navigation}/>
    break;
    case 'legal':
      newContent = <ModalLegal navigation={navigation}/>
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
        <Text style={styles.headerText}>Runsoco</Text>
      </View>
      {
        newContent
      }
    </ScrollView>
  );
}

export default AuthScreen;