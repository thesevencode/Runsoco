import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function OrderDescription() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.text1}>Pizzeria - Restaurant</Text>
        <Text style={styles.text2}>EL HORCON</Text>
        <Text style={styles.text3}>Detalle de mi pedido</Text>
      </View>
    </View>
  );
}

export default OrderDescription;