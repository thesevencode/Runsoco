import React from 'react';
import { View, FlatList, Text } from 'react-native';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import BussinesSearch from './components/BussinesSearch/BussinesSearch';
import BussinesItem from './components/BussinesItem/BussinesItem';

import styles from './styles';

function BussinesScreen({ navigation }) {
  return (
    <>
      <HeaderNavigation />
      <View style={styles.container}>
        <BussinesSearch />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            { id: '1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVygLrBx9U4LeO3Afv89DoNJUzC_Vv8awWlAgvXmPhv9T8W4Xc', name: 'GUSTITOS EL CURA' },
            { id: '2', url: 'https://static.websguru.com.ar/var/m_6/68/685/151198/2124137-878605-pizzeria-restaurant-el-horcon-pizzeria-con-instalaciones-ventiladas_(1)-16790.jpg', name: 'El HORCON' },
            { id: '3', url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/0d/1f/24/copasu.jpg', name: 'COPAZU' }
          ]}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <BussinesItem bussine={item} />
          }
        />
      </View>
    </>
  );
}

export default BussinesScreen;