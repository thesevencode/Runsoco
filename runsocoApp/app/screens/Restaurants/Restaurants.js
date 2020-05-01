import React, { useState, useEffect } from 'react';
import { Input, Button, SocialIcon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select'

import { View, Text, Animated, StyleSheet, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export default function Restaurants({navigation}) {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={{ borderBottomWidth: wp(.3), borderColor: '#999', width: '93.4%', marginBottom: hp(2) }}>
          <Text style={{ color: '#8d98a2', fontWeight: 'bold', fontSize: hp(2.2) }}>
            Categoría
          </Text>
          <RNPickerSelect
          
          placeholder={{ label: 'Selecciona una categoría', value: null, color: 'gray' }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Se la come Ciro', value: '' },
            { label: 'Se la come Denis', value: '' },
            { label: 'Se la come Sadam', value: '' },
            { label: 'Se la come Romario', value: '' },
          ]}
        />
        </View>
        <Input  inputStyle={styles.input} inputContainerStyle={styles.containerInput} label="Descripción" placeholder="Descripción" />
        <Input  inputStyle={styles.input} inputContainerStyle={styles.containerInput} label="Tienda" placeholder="Tienda" />
        <Input  inputStyle={styles.input} inputContainerStyle={styles.containerInput} label="Celular" placeholder="Celular" />
        <Button
          title="Pédido"
          containerStyle={styles.btnContainerLogin}
          buttonStyle={styles.btn}
        />
        <SocialIcon
          style={{ backgroundColor: '#00a680', width: wp(15), height: hp(8), alignSelf: 'flex-end' }}
          type='whatsapp'
    
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(34, 181, 110, 0.1)"
    },
    //FORMULARIO
    form: {
      padding: wp(6),
      alignItems: 'center'
    },
    containerInput: {
      marginBottom: hp(2)
    },
    input: {
      fontSize: hp(2)
    },
    btn: {
      backgroundColor: "#00a680",
      borderRadius: wp(1),
    },
    btnContainerLogin: {
      marginTop: hp(1),
      width: wp(50),
      marginBottom: hp(2)
    },
})

