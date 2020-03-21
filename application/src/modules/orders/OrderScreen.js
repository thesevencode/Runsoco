import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import OrderDescription from './components/OrderDescription/OrderDescription';
import OrderForm from './components/OrderForm/OrderForm';

import styles from './styles';

function OrderScreen({ navigation }) {
  return (
    <>
      <HeaderNavigation />
      <ScrollView style={styles.scroll}>
        <OrderDescription />
        <View style={styles.container}>
          <OrderForm />
        </View>
      </ScrollView>
    </>
  );
}

export default OrderScreen;