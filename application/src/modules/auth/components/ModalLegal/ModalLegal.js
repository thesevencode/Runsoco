import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import styles from './styles';
import styles2 from '../ModalRegister/styles';

function ModalLegal({ navigation }) {
  return (
    <View style={styles2.container}>
      <View style={styles2.form}>
        <View style={styles2.formHeader}>
          <Text></Text>
          <TouchableOpacity 
            style={styles2.formBtn2}
            onPress={() => navigation.navigate('Index')}
          >
            <Text style={[styles2.formText2, styles2.formText] }>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles2.image}>
          <Text style={[styles2.imageText, styles.imageText]}>Términos. condiciones y privacidad</Text>
          <TouchableOpacity style={styles2.imageBtn}>
            <Image style={[styles2.imageImage, styles.imageImage]} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/apreton-de-manos.png?raw=true' }} />
          </TouchableOpacity>
        </View>
        <View style={styles2.or}>
          <View style={styles2.or1}></View>
          <Text style={styles2.orText}>o</Text>
          <View style={styles2.or1}></View>
        </View>
        <View>
          <Text style={[styles.text, styles.text1]}>
            Usamos los datos de nuestros clientes para mejorar la experiencia de nuestro servicio y 
            mostrar promociones relacionadas.
          </Text>
          <Text style={styles.text}>
            Para continuar, acepte los
            <Text style={styles.subtext}>
              Términos y condiciones, política de privacidad de datos y cookies.
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles2.containerBtn}>
        <TouchableOpacity 
          style={[styles2.btn, styles.btn]}
          onPress={() => navigation.navigate('Bussines')}
        >
          <Text style={styles2.btnText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ModalLegal;