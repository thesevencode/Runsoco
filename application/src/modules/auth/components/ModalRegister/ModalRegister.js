import React from 'react';
import { wi } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import styles from './styles';

function ModalRegister({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formHeader}>
          <TouchableOpacity style={styles.formBtn1}>
            <Text style={[styles.formText1, styles.formText] }>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formBtn2} onPress={() => navigation.navigate('Index')}>
            <Text style={[styles.formText2, styles.formText]}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Text style={styles.imageText}>Regístrate</Text>
          <TouchableOpacity style={styles.imageBtn}>
            <Image style={styles.imageImage} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/register.png?raw=true' }} />
          </TouchableOpacity>
        </View>
        <View style={styles.or}>
          <View style={styles.or1}></View>
          <Text style={styles.orText}>o</Text>
          <View style={styles.or1}></View>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Nombres(s)"/>
          <TextInput style={styles.input} placeholder="Celular"/>
          <TextInput style={styles.input} placeholder="Correo electrónico"/>
          <TextInput style={styles.input} placeholder="Contraseña"/>
        </View>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => navigation.navigate('Auth', { content: 'legal' })}
        >
          <Text style={styles.btnText}>REGÍSTRATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ModalRegister;