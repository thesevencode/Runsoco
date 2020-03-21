import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function BussineFood({ food }) {
  return (
    <View style={styles.container}>
      <Text style={styles.absolute}>Combo</Text>
      <View style={styles.subcontainer1}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{ uri: food.url }} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.text1}>{ food.name }</Text>
          <Text style={styles.text2}>{ food.ingredients }</Text>
        </View>
      </View>
      <View style={styles.subcontainer2}>
        <Text style={styles.textPrice}>S/. 30.00</Text>
        <TouchableOpacity style={styles.btn}>
          <Icon
            style={styles.icon}
            name="plus" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BussineFood;