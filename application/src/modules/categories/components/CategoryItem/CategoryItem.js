import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import styles from './styles'

function CategoryItem({ url, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: url }} 
      />
      <Text style={styles.text}>{ title }</Text>
    </TouchableOpacity>
  );
}

export default CategoryItem;