import React from 'react';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import IndexScreen from './src/modules/index/IndexScreen';
import CategoriesScreen from './src/modules/categories/CategoriesScreen';
import BussinesScreen from './src/modules/bussines/BussinesScreen';
import BussineScreen from './src/modules/bussine/BussineScreen';
import OrderScreen from './src/modules/orders/OrderScreen';
import AuthScreen from './src/modules/auth/AuthScreen';
import TutorialScreen from './src/modules/tutorial/TutorialScreen';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Tutorial"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Bussines" component={BussinesScreen} />
        <Stack.Screen name="Bussine" component={BussineScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
