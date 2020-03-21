import React from 'react';
import { TextInput, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function BussinesSearch() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pizzerias</Text>
      <TextInput 
        style={styles.input}
        placeholder="Buscar"
      />
      <Icon  name="search" style={styles.icon} />
    </View>
  );
}

export default BussinesSearch;