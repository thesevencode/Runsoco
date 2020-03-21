import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function BussinesItem({ bussine }) {
  return (
    <View style={styles.container}>
      <Image  source={{ uri: bussine.url }} style={styles.image}/>
      <View style={styles.containerInfo}>
        <View style={styles.containerInfoLeft}>
          <Text style={styles.title}>{ bussine.name }</Text>
          <View style={styles.containerStars}>
            <Icon  name="star"  style={styles.icon} />
            <Icon  name="star"  style={styles.icon} />
            <Icon  name="star"  style={styles.icon} />
            <Icon  name="star"  style={styles.icon} />
          </View>
          <Text>Hora</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>VER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BussinesItem;