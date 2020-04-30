import React, { useState, useEffect } from 'react';

import { View, Text, Animated, StyleSheet } from "react-native";


export default function Restaurants({navigation}) {
  
  return (
    <View style={styles.container}>
        <Text onPress={()=> navigation.navigate("Restaurante")}>Restaurants</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 150
    }
})