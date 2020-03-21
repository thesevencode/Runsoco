import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function HeaderNavigation() {
  return (
    <View style={styles.container}>
      <Text style={styles.void}></Text>
      <Text style={styles.logo}>Runsoco</Text>
      <TouchableOpacity style={styles.btn}>
        <Icon style={styles.icon} name="bars" />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderNavigation;