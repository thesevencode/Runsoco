import React from 'react';
import { View, FlatList, Text } from 'react-native';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import BussineDescription from './components/BussineDescription/BussineDescription';
import BussineFood from './components/BussineFood/BussineFood';

import styles from './styles';

function BussineScreen({ navigation }) {
  return (
    <>
      <HeaderNavigation />
      <View style={styles.container}>
        <BussineDescription />
        <View style={styles.subcontainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[
              { id: '1', name: 'Pizza Terminator', price: 70.00, ingredients: 'Queso, tomate, chorizo y jr se la come', url: 'https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg' },
              { id: '2', name: 'Pizza Hawayana', price: 55.00, ingredients: 'Queso, piña, chorizo y jr se la come', url: 'https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/m/o/mozzarella_web_1.png' },
              { id: '3', name: 'Pizza Mixra', price: 80.00, ingredients: 'Queso, tomate, chorizo y jr se la come', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd-fgeK1zbeZB-CyRzqhADoBcY2ILcU4RXaXFnEBP7VHrIYASR' }
            ]}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <BussineFood  food={item} />
            } 
          />
        </View>
      </View>
    </>
  );
}

export default BussineScreen;