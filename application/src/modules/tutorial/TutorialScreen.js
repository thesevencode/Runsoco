import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

function TutorialScreen({ navigation }) {
  const [content, setContent] = useState('content1');

  let container = (
    <View style={styles.content}>
      <View style={styles.superior}>
        <Text style={styles.superiorText}>RUNSOCO TUS SERVICIOS DE LARGA</Text>
      </View>
      <View style={styles.inferior}>
        <Image style={styles.image} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/email.png?raw=true' }} />
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => setContent('content2')}
        >
          <Text style={styles.btnText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if(content === 'content2') {
    container = (
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
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.back1}></View>
        <View style={styles.back2}></View>
      </View>
      {
        container
      }
    </ScrollView>
  );
}

export default TutorialScreen;