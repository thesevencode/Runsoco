import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Step2Screen(props) {
    const { navigation } = props

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.back1}></View>
        <View style={styles.back2}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.superior}>
          <Text style={styles.superiorText}>LO COMPRAMOS POR TI Y TE LO LLEVAMOS</Text>
        </View>
        <View style={styles.inferior}>
          <Image style={styles.image} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/email.png?raw=true' }} />
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('Index')}
          >
            <Text style={styles.btnText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}