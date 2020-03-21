import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function BussineDescription() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.text1}>Pizzeria - Restaurant</Text>
        <Text style={styles.text2}>EL HORCON</Text>
        <Text style={styles.text3}>10:00 a.m. a 9:00 p.m</Text>
      </View>
    </View>
  );
}

export default BussineDescription;