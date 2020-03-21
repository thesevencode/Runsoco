import React from 'react';
import { View, Text, TextInput, Picker, TouchableOpacity } from 'react-native';

import styles from './styles';

function OrderForm() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Text style={styles.text1}>Descripción de entrega</Text>
        <TextInput style={styles.input} placeholder="Celular" />
        <TextInput style={styles.input} placeholder="Dirección"/>
        <Text style={[styles.line, styles.line2]}></Text>
        <Text style={[styles.line, styles.line1]}></Text>
      </View>
      <View style={styles.subcontainer1}>
        <Text style={styles.text1}>Cupón de descuento</Text>
        <TextInput style={styles.input} placeholder="Código" />
        <Text style={[styles.line, styles.line2]}></Text>
        <Text style={[styles.line, styles.line1]}></Text>
      </View>
      <View style={styles.subcontainer1}>
        <Text style={styles.text1}>Método de pago</Text>
        <Picker 
          style={styles.picker} mode="modal"
          itemStyle={styles.option}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <View style={styles.containerContainer}>
          <View style={styles.containerText}>
            <Text style={styles.text2}>Comida</Text>
            <Text>S/. 165</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text2}>Delivery</Text>
            <Text>S/. 165</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text1}>Total</Text>
            <Text style={styles.text1}>S/. 170.5</Text>
          </View>
          <Text style={[styles.line, styles.line2, styles.lineExtra]}></Text>
          <Text style={[styles.line, styles.line1, styles.lineExtra]}></Text>
        </View>
      </View>
      <View style={[styles.subcontainer2]}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.textBtn}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.textBtn}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderForm;