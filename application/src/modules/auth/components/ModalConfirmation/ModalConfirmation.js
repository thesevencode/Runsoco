import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import styles from './styles';
import styles2 from '../ModalRegister/styles';

function ModalConfirmation({ navigation }) {
  return (
    <View style={styles2.container}>
      <View style={[styles2.form, styles.form]}>
        <View style={styles2.formHeader}>
          <Text></Text>
          <TouchableOpacity style={styles2.formBtn2}>
            <Text style={[styles2.formText2, styles2.formText] }>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles2.image}>
          <Text style={[styles2.imageText, styles.imageText]}>Validad correo electrónico</Text>
          <TouchableOpacity style={styles2.imageBtn}>
            <Image style={[styles2.imageImage, styles.imageImage]} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/email.png?raw=true' }} />
          </TouchableOpacity>
        </View>
        <View style={styles2.or}>
          <View style={styles2.or1}></View>
          <Text style={styles2.orText}>o</Text>
          <View style={styles2.or1}></View>
        </View>
        <Text style={[styles.text, styles.text1]}>
            Usamos los datos de nuestros clientes para mejorar la experiencia de nuestro servicio y 
            mostrar promociones relacionadas.
          </Text>
        <View>
          <TextInput style={[styles2.input, styles.input]} placeholder="Código de verificación"/>
        </View>
      </View>
      <View style={styles2.containerBtn}>
      <TouchableOpacity style={[styles2.btn, styles.btn, styles.btn1]}>
          <Text style={styles2.btnText}>REENVIAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles2.btn, styles.btn]}>
          <Text style={styles2.btnText}>VERIFICAR</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

export default ModalConfirmation;