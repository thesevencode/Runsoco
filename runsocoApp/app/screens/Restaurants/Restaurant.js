import React from 'react';

import { View, Text, StyleSheet } from "react-native";


export default function Restaurant() {

  
  return (
    <View style={styles.container}>
      <Text>Restaurante</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 150
    }
})